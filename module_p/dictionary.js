/** @format */

const dictionary = {
  function:
    'Block of code, given a name with which to call it, like<p style="font-size:smaller">def main:<br>&nbsp;.....</p><p style="font-size:smaller">main() # calling main',
  "advantages of using functions":
    "<ul><li>modularization<li>re-use<li>less lines of code<li>enhanced maintainability",
  "recursive function":
    'self-referential function, uses prior invocation to compute current invocation, like<p style="font-size:smaller">def recurse(n):<br>&nbsp;&nbsp;if (n == 0):<br>&nbsp;&nbsp;&nbsp;return<br>&nbsp;&nbsp;else: <br>&nbsp;&nbsp;&nbsp;recurse(n-1)</p>',
  "suitability, recursion":
    "<ul><li>not typical<li>can be slower than equivalent iterative solution<li>difficult to maintain<li>suited to tree traversal",
  "base case":
    'exit condition for recursive function, like<p style="font-size:smaller"><br>def recurse(n):<br>&nbsp;&nbsp;# <em>BASE CASE, n == 0</em><br>&nbsp;&nbsp;if (n == 0):<br>&nbsp;&nbsp;&nbsp;return<br>&nbsp;&nbsp;else: <br>&nbsp;&nbsp;&nbsp;recurse(n-1)</p>',
  "recursive case":
    'self referential case for recursive function, like<p style="font-size:smaller"><br>def recurse(n):<br>&nbsp;&nbsp;if (n == 0):<br>&nbsp;&nbsp;&nbsp;return<br>&nbsp;&nbsp;# <em>RECURSIVE CASE</em><br>&nbsp;&nbsp;else: <br>&nbsp;&nbsp;&nbsp;recurse(n-1)</p>',
  stack:
    "area in memory, stores record of function call,local variables - stack grows and shrinks to hold function call information ",
  "stack overflow error":
    "occurs when no room left on stack to store function data, can prevent with correct base case</p>",
};
