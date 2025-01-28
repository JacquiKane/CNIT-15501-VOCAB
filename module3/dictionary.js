/** @format */

const dictionary = {
  Statement:
    "an instruction that the Python interpreter can execute, like,<br>x = y<br>import math<br>if (x>y) .....",
  Expression:
    "an instruction that the Python interpreter has to evaluatee, like,<br>x = y + 4**3<br>x = isOpen and isAvailable",
  "Type Casting":
    "Use of a conversion function to convert between different data types.<br>num = input('Enter Number:')<br>num = int(num)",
  "print arguments":
    "print(*objects, sep=' ', end= '\n', file=sys.stdout, flush=False)<br>",
  Testing: "Practice of verifying that the program code works as it should.",
  "Test Case":
    "Specific set of actions to test a given program requirement. Test cases need<ul><li>Description<li>Input<li>Expected Output<li>Actual Output</ul>",
  "Test Plan":
    "Strategic approach covering<ul><li>normal cases<li>special cases<li>boundary cases<li>error cases</ul>",
  "Regression Testing":
    "Re-running tests to ensure that previously developed and tested software still performs as expected after a change. ",
  "Relational Operators":
    '<ul style="font-size:smaller"><li>Less than →  &lt;<li>Greater than →  &gt;<li>Equal to →  ==<li>Not equal to → !=<li>Less than or equal to → &lt;=<li>Greater than or equal to → &gt;=</ul>',
  "Control Statement(Structure)":
    "Program code that supports specific action in the code, like <i>if, while</i>",
  if: "Control statement that supports branching to specific code blocks<br>if (x &gt; y):<br>&nbsp;&nbsp;print('x &gt; y')",
  "if-else":
    'Control statement that includes 2 branches, branch if condition is true, branch if condition is false<br><div style="font-size:smaller">if (x &gt; y):<br>&nbsp;&nbsp;print("x bigger!)<br>else:<br>&nbsp;&nbsp;print("x NOT bigger!)<br></div>',
  "if-elif..-else":
    "Control Statement, multiple branches<br><div style=\"font-size:smaller\">if (x == 3):<br>&nbsp;&nbsp;print(3)<br>elif (x == 4):<br>&nbsp;&nbsp;print(4)<br>..<br>else:<br>&nbsp;&nbsp;print('None!')</div>",
  "Boolean Value": "Value of True or False",
  "Boolean Algebra":
    "Predicate calculus created by George Boole, Anglo-Irish mathematician, University College Cork, Ireland, 1800s. Values of True/False. Used in coding, circuitry.",
  "Math Operators":
    "Special symbols indicating operations like addition (+), subtraction (-), exponentiation (**)<br>2**3 is 2<sup>3</sup>",
  "Boolean Operators":
    "Operators that support Boolean Logic operations. Basic operators are AND, OR, NOT.",
  "Truth Tables": "Tabulation of result, given input values of True, False.",
  "AND Truth Table":
    "<table><tr><th>AND</th><th>#1</th><th>#2</th><td>result</td></tr><tr><td></td><td>F</td><td>F</td><td>F</td></tr><tr><td></td><td>F</td><td>T</td><td>F</td></tr><tr><td></td><td>T</td><td>F</td><td>F</td></tr><tr><td></td><td>T</td><td>T</td><td>T</td></tr><table> ",
  "OR Truth Table":
    "<table><tr><th>OR</th><th>#1</th><th>#2</th><td>result</td></tr><tr><td></td><td>F</td><td>F</td><td>F</td></tr><tr><td></td><td>F</td><td>T</td><td>T</td></tr><tr><td></td><td>T</td><td>F</td><td>T</td></tr><tr><td></td><td>T</td><td>T</td><td>T</td></tr><table>",
  "NOT Truth Table":
    "<table><tr><th>NOT</th><th>#1</th><td>result</td></tr><tr><td></td><td>F</td><td>T</td></tr><tr><td></td><td>T</td><td>F</td></tr><table>",
  "Assignment Operator":
    "Single equals, =<br><br>x=7<br>.. assigns a value of 7 to variable, x",
  "Equality Operator":
    'Double equals, ==<br><br><div style="font-size:smaller">x = (passed == true)</div><br>... compares value of <i>passed</i> variable, with true - returns true or false',
  Operand:
    "values used as input to an operation, like<br><br>x+y<br><br>operands are x,y</br>",
  "Modulus Operator, %":
    "Operator that returns the remainder of a division operation<br><br>5 % 4 is 1",
  Increment: "Adding to a variable, <br><br>x = x + 1",
  Decrement: "Subtracting from a variable, <br><br>x = x - 1",
  Function: "Block of code, given a name with which to call it, like main()",
  "Built-in Function":
    'Function defined by language and readily accessible, like,<br><br>print("Hello")',
  "Library Function":
    "Function defined in associated library, should be imported prior to use of function, like,<br><br>import random<br>...<br>rand = random.randrange(1,11)",
  "User Defined Function":
    'Function developed by coder, like,<br><br>def calc():<br>&nbsp;&nbsp;firstNum = input("Enter value :")<br>&nbsp;&nbsp;return someVal',
  "Augmented Assignment Operators":
    'Shorthand, for assignment and operation,<br><br><div style="font-size:smaller"><ul><li>x +=1 like x = x + 1<li>x *=3 like x = x * 3<li>x **=7 like x = x to power of 7</ul></div>',
  Concatenation:
    'Joining strings together, like<br><br>"I say ' + 'Hello World!"',
  "Syntax Error":
    'Typically Error is using the grammer of the language, like,<br>ptint("Hello world"), or <br>x 1 =<br>',
  "Semantic Error":
    "Error in logic of program code, like,<br>x = y, instead of x = z, or an infinie loop or inaccurate comparison.",
  "Runtime Error":
    "Error that is apparent when the code runs, but undetected by the compiler prior to execution, like,<br> z = x / y, when y has a value of zero (numeric divide by 0 error)",
  "Math Constants":
    "Special values, commonly used in computation and defined by the language for convenience, like,<br>pi<br>e",
  "Precedence Rules":
    "Rules governing the order of evaluation of math operations in math expressions, like PEMDAS.",
  "Conversion Function":
    "Function that converts the data type of a variable, to another data type, like converting int variable, studentGradYear, to a String, with str(sudentGradYear).",
  "Strongly Typed":
    "Enforcement of strict rules for mixing data types and variables. Python is stronlly typed.",
  "Dynamically Typed":
    "Data type of variable is determined at runtime, after an assignment. Python is dynamically typed.",
  Bug: "Problem, typically semantic error, in code. Coined in 1950s after punched paper encoding trapped a moth, and caused the computation to fail!",
  Flowchart:
    "Block diagram tht uses specific symbols to indicate the processes and flow of operation in a computer program.",
};
