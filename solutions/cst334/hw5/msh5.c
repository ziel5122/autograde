#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <time.h>
#include <unistd.h>
#include <errno.h>

/*
 * A simple shell
 */

#define MAX_BUF 160
#define MAX_TOKS 100

int main(int argc, char *argv[]) {
  char *pos;
  char *tok;
  char *path;
  char s[MAX_BUF];
  char *toks[MAX_TOKS];
  time_t rawtime;
  struct tm *timeinfo;
  static const char prompt[] = "msh> ";
  char *redirect_in_name;
  char *redirect_out_name;
  FILE *infile;
  FILE *redirect_in;
  FILE *redirect_out;

  /* 
   * process command line options
   */

  if (argc > 2) {
    fprintf(stderr, "msh: usage: msh [file]\n");
    exit(EXIT_FAILURE);
  }
  if (argc == 2) {
    /* read from script supplied on the command line */
    infile = fopen(argv[1], "r");
    if (infile == NULL) {
      fprintf(stderr, "msh: cannot open script '%s'.\n", argv[1]);
      exit(EXIT_FAILURE);
    }
  } else {
    infile = stdin;
  }

  while (1) {
    /* prompt for input, if interactive input */
    if (infile == stdin) {
      printf(prompt);
    }

    /*
     * read a line of input and break it into tokens 
     */

    /* read input */
    char *status = fgets(s, MAX_BUF-1, infile);

    /* exit if ^d or "exit" entered */
    if (status == NULL || strcmp(s, "exit\n") == 0) {
      if (status == NULL && infile == stdin) {
	printf("\n");
      }
      exit(EXIT_SUCCESS);
    }

    /* remove any trailing newline */
    if ((pos = strchr(s, '\n')) != NULL) {
      *pos = '\0';
    }

    /* break input line into tokens, handle redirection */
    char *rest = s;
    int num_toks = 0;
    int waiting_for_in = 0;
    int waiting_for_out = 0;
    redirect_in_name = NULL;
    redirect_out_name = NULL;
    while ((tok = strtok_r(rest, " ", &rest)) != NULL && num_toks < MAX_TOKS) {
      if (waiting_for_in) {
	redirect_in_name = tok;
        waiting_for_in = 0;
      } else if (waiting_for_out) {
	redirect_out_name = tok;
	waiting_for_out = 0; 
      } else if (strcmp(tok, "<") == 0) {
	waiting_for_in = 1;
      } else if (strcmp(tok, ">") == 0) {
	waiting_for_out = 1;
      } else {
	toks[num_toks] = tok;
	num_toks++;
      }
    }
    if (num_toks == MAX_TOKS) {
      fprintf(stderr, "msh: too many tokens");
      exit(EXIT_FAILURE);
    }
    toks[num_toks] = NULL;

    /*
     * process a command
     */

    /* do nothing if no tokens found in input */
    if (num_toks == 0) {
      continue;
    }

    /* if a shell built-in command, then run it */
    if (strcmp(toks[0], "help") == 0) {
      /* help */
      printf("enter a Linux command, or 'exit' to quit\n");
      continue;
    } 
    if (strcmp(toks[0], "today") == 0) {
      /* today */
      time(&rawtime);
      timeinfo = localtime(&rawtime);
      printf("Current local time: %s", asctime(timeinfo));
      continue;
    }
    if (strcmp(toks[0], "cd") == 0) {
      /* cd */
      if (num_toks == 1) {
	path = getenv("HOME");
      } else {
	path = toks[1];
      }
      int cd_status = chdir(path);
      if (cd_status != 0) {
	switch(cd_status) {
	case ENOENT:
	  printf("msh: cd: '%s' does not exist\n", path);
	  break;
	case ENOTDIR:
	  printf("msh: cd: '%s' not a directory\n", path);
	  break;
	default:
	  printf("msh: cd: bad path\n", path);
	}
      }
      continue;
    }

    /* not a built-in, so fork a process that will run the command */
    int rc = fork();
    if (rc < 0) {
      fprintf(stderr, "msh: fork failed\n");
      exit(1);
    }
    if (rc == 0) {
      /* redirect input or output if indicated */
      if (redirect_in_name != NULL) {
	if ((redirect_in = fopen(redirect_in_name, "r")) == NULL) {
          printf("msh: %s: %s\n", redirect_in_name, strerror(errno));
          exit(1);
        }
        dup2(fileno(redirect_in), fileno(stdin));
      }
      if (redirect_out_name != NULL) {
	if ((redirect_out = fopen(redirect_out_name, "w")) == NULL) {
          printf("msh: %s: %s\n", redirect_out_name, strerror(errno));
          exit(1);
        }
        dup2(fileno(redirect_out), fileno(stdout));
      }
     
      execvp(toks[0], toks);
      /* if execvp returns then an error occurred */
      printf("msh: %s: %s\n", toks[0], strerror(errno));
      exit(1);
    } else {
      /* parent process: wait for child to terminate */
      wait(NULL);
    }
  }
}
