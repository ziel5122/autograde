#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int INPUT_SIZE = 50;

int main() {
	
	char input[50];

	while (strcmp(input, "exit\n") != 0) {
		printf("msh> ");
		fgets(input, INPUT_SIZE, stdin);
		printf("%s", input);
	}

	return 0;
}