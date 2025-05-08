# Good to know

- 
- use `set -x` to see the commands that are executed. `set -e` to stop the script if any command fails.

- To run the script in the background use `nohup ./script.sh &` for detached mode and `nohup ./script.sh` for foreground mode. this will run the script in the background and will continue running even if the terminal is closed and it will create a file called nohup.out in the current directory.

- To execute a script (script.sh) using at, you must specify when it should run. For example, at -f script.sh now + 10 minutes schedules it to execute in 10 minutes, while at -f script.sh 14:30 runs it at 2:30 PM. After scheduling, you can view pending jobs using atq, which lists scheduled tasks, and remove a job with atrm <job-number>.

- The crontab command in Linux is used for scheduling automated tasks at fixed intervals. It allows users to define commands or scripts that run periodically without manual execution. To create or edit a crontab, use crontab -e, which opens the cron scheduler in an editor where you can define jobs using a specific syntax. Each line follows the format: minute hour day month day-of-week command, allowing precise scheduling, such as 0 9 * * 1 myscript.sh to run myscript.sh every Monday at 9 AM. You can view scheduled tasks with crontab -l and remove them using crontab -r.

- The `sed` command in Linux is a powerful stream editor used for text processing, allowing users to search, replace, insert, delete, and manipulate text efficiently. Some of its key functions include `p` for printing specific lines, `d` for deleting lines, `s` for substituting text, `i` for inserting new lines, `a` for appending content, and `c` for changing entire lines. Advanced features include `r` for reading from another file, `w` for writing matched lines to a new file, `e` for executing shell commands within `sed`, and `=` for printing line numbers. The `!` operator negates commands, executing them on all lines except those specified, while `z` clears the pattern space. Commands can be combined using `-e` or grouped within `{}` to apply multiple transformations at once. These features make `sed` an indispensable tool for automation and efficient text manipulation in Linux.

- The `sed` command in Linux offers various flags to enhance text processing. The `-n` flag suppresses automatic printing, useful when combined with `p` for selective output. The `-e` flag allows multiple expressions, enabling complex substitutions, while `-f` reads commands from a script file instead of the command line. The `-i` flag edits files in place, eliminating the need for temporary files, and `-r` enables extended regular expressions, making pattern matching more powerful. Case insensitivity can be achieved using `-I`, ensuring substitutions apply regardless of letter case. The `-w` flag writes only substituted lines to a file, useful for extracting data. Advanced flags like `-b` and `-t` introduce branching functionality, allowing conditional execution within `sed` scripts. With these options, `sed` becomes a versatile tool for automated text transformations in Linux.

- to setup root password, use `sudo passwd root`. type `exit` to exit from root user. for temporarily switch to user, use su - <username>.

- for loop splits the file content into space not new line where as while loop splits the file content into new line

- `$#` is the number of arguments passed to the script.
- echo `$?`# to check the previous command is success or not, 0 is success and 1 is failure

- The parentheses create a subshell, allowing multiple commands (echo and ls) to execute together as a single unit. The semicolon ; separates the two commands inside the subshell, ensuring they both run before redirecting output to the file. i.e. `(echo "Hello" ; ls) >> fileName`. without `()` then the two commands would be executed separately.

- Both `$(( ))` (arithmetic expansion) and the `let` keyword in Bash handle exit statuses similarly, determining their success or failure based on the result of the arithmetic expression. If the result is non-zero, the exit status is `0` (indicating success), and if the result is zero, the exit status is `1` (indicating failure). For example, in `$((5 > 3))`, the expression evaluates to true, so the exit status is `0`, while `$((3 > 5))` results in an exit status of `1`. The same logic applies to `let`. While `let` is functional, `$(( ))` is generally preferred for modern scripting due to its cleaner syntax, easier integration within scripts, and overall readability, making it the go-to choice for arithmetic operations in Bash.

- Use `>` when you want to start fresh and replace the file's contents. Use `>>` when you want to keep the existing content and add new data to the file.

- `;` separates commands, allowing multiple commands on one line. The `;;` terminates a block in a case statement, signaling its end.

- The shift command in shell scripting is used to shift the positional parameters of a script to the left, effectively discarding the first parameter ($1) and reassigning the rest. After using shift, the second parameter ($2) becomes $1, the third parameter ($3) becomes $2, and so on. If no arguments are left, $@ (all arguments) and $* (all arguments as a single string) become empty.

- The `/dev/null` file in Linux is a special "black hole" where unwanted output is discarded, making it useful for cleaning up noisy command executions. A common use case is redirecting standard output (`> /dev/null`) or both output and errors (`> /dev/null 2>&1`) to suppress command messages entirely, keeping logs or terminal output clean. It’s particularly handy in automation and scripting, where processes run in the background and unnecessary feedback is ignored for efficiency. For example, when checking internet connectivity using `ping`, redirecting the output to `/dev/null` ensures the command executes silently without cluttering the console. Similarly, background jobs (`command &> /dev/null &`) use it to prevent unnecessary logs while running tasks continuously. Essentially, `/dev/null` is an effective way to discard output, reduce noise, and streamline command-line operations.


## Difference between

- `$`and `@` in a bash script

  - The `$` character is used to represent a variable in a bash script, while the `@` character is used to represent an array in a bash script or a positional parameter in a bash script.

- `$()` and `${}` in a bash script

  - Use `$()` when you want to execute a command and use its result.

  - Use `${}` to manipulate variables or access values in a shell script.

## Syntax

- `(())` for arithmetic operations

- `[[ ]]` for string operations and conditionals. it is better than using `[]` because it supports regex and logical operators if we had to do this with `[]` then additional tooling would be required like grep for regex.
  `[[]]` prevents word splitting and pathname expansion, meaning it handles spaces and special characters in variables more safely: `file="my file.txt"
if [[ -f $file ]]; then
    echo "File exists!"
fi`
  With `[ ]`, you'd need to explicitly quote the variable ("$file") to avoid syntax errors.

- `#` for number operations or comments. i.e. `${#arr[*]}`
- `<<` for multiline comments.
- `-e` for escape sequences

### Difference between `<` and `>`

`<` (Redirection for Input):
The `<` operator is used to redirect the contents of a file as input to a command.

`Example:` done `<` file.txt
In this case, the `<` operator is feeding the contents of file.txt line by line to the while loop or command.

`>` (Redirection for Output):
The `>` operator writes or overwrites output to a file.
`Example`: `echo "Hello world" > file.txt`
This will write "Hello world" to file.txt, replacing any existing content in the file.

`>>` (Appending for Output):
If you're appending data to an existing file, use the `>>` operator instead of `>`.

`Example`: `echo "Hello world" >>file.txt`
This will add "Hello world" to the end of file.txt without erasing its current content.

### While loop

`IFS=`: The IFS (Internal Field Separator) is temporarily set to an empty value. This ensures that the line is read as-is, without splitting it into parts based on spaces or tabs.

`read -r line`: `read`: Reads a single line from the input (in this case, the file).

`-r`: Prevents backslashes (\) in the input from being treated as escape characters, ensuring the line is read literally.

`line`: This is a variable that stores the content of the current line being read.

- The redirection `(< "$FILE")` ensures that each of the lines above is read one at a time. Without `done < "$FILE"`, the loop wouldn't know what to process because it wouldn't have the file content as input.

- `Input Redirection (<)`: The `<` operator is used in bash to redirect the contents of a file as input for a command or script. In this case, it redirects the contents of `$FILE (your file path)` to the while loop.
  `$FILE`: This is a variable that holds the path to your file, which contains the data you want to process line by line.

- `done`: Marks the end of the while loop. At this point, all the instructions inside the loop block `(do ...)` have been executed for each line in the file. So, `done < "$FILE"` tells the shell: "Run this loop, and feed it the contents of the file specified by $FILE line by line as input."
