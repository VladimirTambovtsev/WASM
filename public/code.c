#include <string.h>

void numLog(int n);
void strLog(char * msg, length);

int main() {
  return 42;
}


void getDoubleNumber(int x) {
  numLog(x * 2);
}

void getMessage() {
  char * msg = "Hello from C";
  strLog(msg, strlen(msg));
}