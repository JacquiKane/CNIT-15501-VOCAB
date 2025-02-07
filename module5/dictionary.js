/** @format */

const dictionary = {
  loop: "structure that supports repetition, iteration - code is repeated a discrete number of times, or infinitely.<ul><li>while loop<li>for loop</ul>",
  "pre-test loop":
    "loop, condition evaluated before the body of the loop is executed, like a while loop,<p>while (i <= 10):<br>&nbsp;&nbsp;....</p>",
  "while loop":
    "pre-test loop, body of loop is executed only if loop condition True, like <p>while (i <= 10):<br>&nbsp;&nbsp;....</p>",
  "for loop":
    'pretest loop, iterates over a sequence (list, tuple, dictionary, set, string, range), like<p style="font-size:smaller">for i in range(1,10):<br>&nbsp;&nbsp;......</p>',
  "loop condition":
    "Boolean expression or variable. If True, body of the loop executes, if False, the loop exits, like when i is 6 below<p>while (i <= 5):<br>&nbsp;&nbsp;....</p>",
  "loop variable, sentry variable":
    "variable that controls how many times a loop iterates, like <i>i</i>, below.<p>while (i &lt; 7):<br>&nbsp;&nbsp;i += 1<br>&nbsp;&nbsp;.....</p>",
  "body of loop":
    'code executed each iteration of a loop, like lines 2, 3 below, <br><p style="font-size:smaller">1&nbsp;&nbsp;while (i &lt; 7):<br><em><i>2&nbsp;&nbsp;&nbsp;&nbsp;i += 1<br>3&nbsp;&nbsp;&nbsp;&nbsp;.....</em></i></p>',

  "counting loop":
    'loop, number of iterations based on value of numeric counter, like use of range function in Python,<p style="font-size:smaller">for i in range(1,10):<br>&nbsp;&nbsp;......</p>',

  "Python list":
    'an ordered and changeable collection of items, like<p style="font-size:smaller">box = ["1","key", "badge"]<br>purse[0]="snack"<br># possible to change values!',
  "Python tuple":
    'an ordered and unchangeable collection of items, like<p style="font-size:smaller">purse = ("1", "key", "badge")<br># not possible to change values!',
  "for loop rationale":
    "Use for loop for counting loops, when you know the number of iterations",
  "while loop rationale":
    "Use while loop, if the loop should go on while a condition holds (you do not know the exact number of iterations)",
  "nested loop":
    'Outer loop, inner loop - loop inside another loop, like<p style="font-size:smaller">for i in range(0,5):<br>&nbsp;for j in range(0,5):<br>&nbsp;&nbsp;print("*", end = \'\')',
  break:
    'exits the loop, brings control to the statement after the loop, like,<p style="font-size:smaller">while (i < 5):<br>&nbsp;...<br>&nbsp;if (j == 1):<br>&nbsp;&nbsp;break<br>&nbsp;&nbsp;# rest of loop not executed</p>',
  continue:
    'skips current cycle, moves to next, like,<p style="font-size:smaller">for i in range (5):<br>&nbsp;...<br>&nbsp;if (i == 3):<br>&nbsp;&nbsp;# skip to top<br>&nbsp;&nbsp;# assume i = 4!<br>&nbsp;&nbsp;continue</p>',
};
