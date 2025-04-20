# Good to know

- for loop splits the file content into space not new line where as while loop splits the file content into new line

## Difference between

- `$`and `@` in a bash script
  - The `$` character is used to represent a variable in a bash script, while the `@` character is used to represent an array in a bash script or a positional parameter in a bash script.

- `$()` and `${}` in a bash script
  - Use $() when you want to execute a command and use its result.

  - Use ${} to manipulate variables or access values in a shell script.

## Syntax

- (()) for arithmetic operations

- `[[ ]]` for string operations

- `#` for number operations or comments. i.e. `${#arr[*]}`
- `<<` for multiline comments.

### Difference between `<` and `>`

    `<` (Redirection for Input):
    The `<` operator is used to redirect the contents of a file as input to a command.

    Example: done `<` file.txt
    In this case, the `<` operator is feeding the contents of file.txt line by line to the while loop or command.

    `>` (Redirection for Output):
    The `>` operator writes or overwrites output to a file.

    Example: echo "Hello world" `>` file.txt
    This will write "Hello world" to file.txt, replacing any existing content in the file.

    `>>` (Appending for Output):
    If you're appending data to an existing file, use the `>>` operator instead of `>`.

    Example: echo "Hello world" `>>` file.txt
    This will add "Hello world" to the end of file.txt without erasing its current content.

