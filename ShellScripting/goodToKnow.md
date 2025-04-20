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
- `-e` for escape sequences

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

### While loop

- `IFS=`: The IFS (Internal Field Separator) is temporarily set to an empty value. This ensures that the line is read as-is, without splitting it into parts based on spaces or tabs.

`read -r line`: `read`: Reads a single line from the input (in this case, the file).

`-r`: Prevents backslashes (\) in the input from being treated as escape characters, ensuring the line is read literally.

`line`: This is a variable that stores the content of the current line being read.

- The redirection (< "$FILE") ensures that each of the lines above is read one at a time. Without done < "$FILE", the loop wouldn't know what to process because it wouldn't have the file content as input.

- `Input Redirection (<)`: The < operator is used in bash to redirect the contents of a file as input for a command or script. In this case, it redirects the contents of $FILE (your file path) to the while loop. `$FILE`: This is a variable that holds the path to your file, which contains the data you want to process line by line.

- `done`: Marks the end of the while loop. At this point, all the instructions inside the loop block (do ...) have been executed for each line in the file. So, done < "$FILE" tells the shell: "Run this loop, and feed it the contents of the file specified by $FILE line by line as input."
