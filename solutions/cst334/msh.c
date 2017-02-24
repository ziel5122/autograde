#include <stdio.h>
#include <stdlib.h>
#include <fcntl.h>
#include <unistd.h>
#include <string.h>
#include <pwd.h>
#include <sys/wait.h>

#define MAX_LENGTH          256
#define FORK_FAILED         "\tError:\tFORK_FAILED"
#define CD_FAILED           "\tError:\tCD_FAILED"
#define OPEN_FILE_FAILED    "\tError:\tOPEN_FILE_FAILED"

// Helper functions
int filter(char*input);
int arg_counter(char* input, size_t length);
void set_arg(int argc, char**argv,char*input);

// My bash command
int help();
int today();
int cd(char**argv);
// Default bash
int bash(char**argv);

// msh
int child(char**argv);
int parent(char**argv);

char* g_tar_in, *g_tar_out;

int main(int argc, char**argv)
{
    // User commands
    if(argc==1)
    {
        // Main Loop
        while (1)
        {
            char c;
            char input[MAX_LENGTH + 1];
            unsigned int length = 0;
            
            printf("\tmsh> ");
            
            // Read user input
            char *status = fgets(input, MAX_LENGTH, stdin);
            if(status==NULL)
            {
                printf("\n");
                break;
            }
            
            // Check exit
            if (strcmp(input, "exit\n") == 0)
                break;
            
            // Parse command
            int m_argc = arg_counter(strtok(input, "\n"), MAX_LENGTH + 1);
            char* m_argv[m_argc + 1];
            set_arg(m_argc,m_argv,input);
            
            // Create process
            int pid = fork();
            if (pid < 0)
            {
                // Error Handling
                printf("\t%s\n", FORK_FAILED);
                exit(1);
            }
            else if (pid == 0)
                return child(m_argv);
            
            parent(m_argv);
        }
    }

    // File commands
    if(argc==2)
    {
        FILE *stream;
        char *line = NULL;
        size_t len = 0;
        ssize_t read;
        
        // Open file
        stream = fopen(argv[1], "r");
        if (stream == NULL)
        {
            // Error Handling
            printf("\t%s\n", OPEN_FILE_FAILED);
            exit(2);
        }
        
        // Read file
        while ((read = getline(&line, &len, stream)) != -1)
        {
            // Parse command
            int m_argc = arg_counter(strtok(line, "\n"), len);
            char* m_argv[m_argc + 1];
            set_arg(m_argc,m_argv,line);
            
            // Create process
            int pid = fork();
            if (pid < 0)
            {
                // Error Handling
                printf("\t%s\n", FORK_FAILED);
                exit(1);
            }
            else if (pid == 0)
                return child(m_argv);
            
            parent(m_argv);
        }
        
        // Clean up
        free(line);
        fclose(stream);
    }
    
	return 0;
}

int filter(char*input)
{
    if(strcmp(input,"<")==0)
        return 1;
    if(strcmp(input,">")==0)
        return 2;
    return 0;
}

int arg_counter(char* input, size_t length)
{
	char input_bak[length];
	memcpy(input_bak, input, length*sizeof(char));
	char *token = strtok(input_bak, " ");
	int argc = 0;
	while (token != NULL)
	{
		argc++;
		token = strtok(NULL, " ");
	}
	return argc;
}

void set_arg(int argc, char**argv,char*input)
{
    g_tar_in = 0;
    g_tar_out = 0;
    int f,i,j=0;
    char* token = strtok(input, " ");
    for (i = 0; i < argc; i++)
    {
        f = filter(token);
        
        if(f == 1)
        {
            //  Move to next token
            token = strtok(NULL, " ");
            argv[j] = token;
            j++;
            i++;
            
            g_tar_in = token;
        }
        else if (f == 2)
        {
            //  Move to next token
            token = strtok(NULL, " ");
            i++;
            
            g_tar_out = token;
        }
        else
        {
            argv[j] = token;
            j++;
        }
        
        token = strtok(NULL, " ");
    }
    argv[j] = NULL;
    return;
}

int help()
{
	printf("\t\tEnter Linux commands, or \"exit\" to exit.\n");
	return 0;
}

int today()
{
	int pid;
	char *argvv[2][3] = { { "date", "+%B %d, %Y", 0 },{ "sed", "s/^/\t\t/", 0 } };
	int fd[2];

	pipe(fd);
	pid = fork();
	if (pid < 0)
	{
		// Error Handling
		printf("\t\t%s\n", FORK_FAILED);
		exit(1);
	}
	else if (pid == 0)
	{
		close(fd[0]);
		close(1);
		dup(fd[1]);
		close(fd[1]);
		execvp(argvv[0][0], argvv[0]);
	}
	else
	{
		// Add indent
		wait(NULL);
		close(fd[1]);
		close(0);
		dup(fd[0]);
		close(fd[0]);
		execvp(argvv[1][0], argvv[1]);
	}

	return 0;
}

int bash(char**argv)
{
	int pid;
	char *m_argv[3] = { "sed", "s/^/\t\t/", 0 };
	int fd[2];

	pipe(fd);
	pid = fork();
	if (pid < 0)
	{
		// Error Handling
		printf("\t\t%s\n", FORK_FAILED);
		exit(1);
	}
	else if (pid == 0)
	{
		close(fd[0]);
		close(1);
		dup(fd[1]);
		close(fd[1]);
		execvp(argv[0], argv);
	}
	else
	{
        wait(NULL);
        close(fd[1]);
        close(0);
        dup(fd[0]);
        close(fd[0]);
        
        if(g_tar_out)
        {
            // Redirection
            char input[MAX_LENGTH + 1];
            FILE *stream;
            
            // Open file
            stream = fopen(g_tar_out, "w+");
            if (stream == NULL)
            {
                // Error Handling
                printf("\t%s\n", OPEN_FILE_FAILED);
                exit(2);
            }
            
            while (fgets(input, MAX_LENGTH, stdin))
            {
                fprintf(stream,"%s",input);
            }

            fclose(stream);
        }
        else
        {
            // Add indent
            execvp(m_argv[0], m_argv);
        }
	}
	return 0;
}

int cd(char**argv)
{
    if(argv[1]!= NULL)
        return chdir(argv[1]);
    struct passwd *passwdEnt = getpwuid(getuid());
    char *home = passwdEnt->pw_dir;
    return chdir(home);
}

int child(char**m_argv)
{
    if (strcmp(m_argv[0], "cd") == 0)
        return 0;

    if (strcmp(m_argv[0], "help") == 0)
        return help();

    if (strcmp(m_argv[0], "today") == 0)
        return today();

    return bash(m_argv);
}

int parent(char**m_argv)
{
    // Wait for child
    wait(NULL);

    if (strcmp(m_argv[0], "cd") == 0)
        if (cd(m_argv) < 0)
            printf("\t%s\n", CD_FAILED); // Error Handling
    
    return 0;
}