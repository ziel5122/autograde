#include <stdio.h>
#include <unistd.h>

int main() {
  int i = 0;

  while (i < 15) {
    printf("printed %d", ++i);
  }
}
