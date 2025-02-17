/** @format */

const dictionary = {
  function:
    'Block of code, given a name with which to call it, like<p style="font-size:smaller">def main:<br>&nbsp;.....</p><p style="font-size:smaller">main() # calling main',
  "advantages of using functions":
    "<ul><li>modularization<li>re-use<li>less lines of code<li>enhanced maintainability",
  "pre-defined function":
    'pre-written - from external library, or built-in, native to language, like<p style="font-size:smaller">import random<br># from random library<br>x = random.randint(1,9) <br><br>print("Hi") # built-in</p>',
  "user-defined function":
    'function code that is written by the developer, to resolve a programming problem, end-user requirement, like<p style="font-size:smaller">def computePay(scale):<br>&nbsp;...<br>&nbsp;return(amount)</p>',
  parameter:
    'variable used in a function or method declaration, as a means to pass data into the function from the calling code, like<p style="font-size:smaller">def computePay(<span style = "font-weight:900; font-style: oblique 40deg;color:goldenrod">scale</span>):<br>&nbsp;...<br>&nbsp;return(amount)</p>',
  argument:
    'also known as <i>actual parameter<i>, data passed to function or method by calling code, like<p style="font-size:smaller">pay_scale = 3<br>computePay(<span style = "font-weight:900; font-style: oblique 40deg;color:goldenrod">pay_scale</span>)',
  "return statement":
    'causes exit from function, passes data back to calling code, like<p style="font-size:smaller">def computePay(scale):<br>&nbsp;...<br>&nbsp;<span style = "font-weight:900; font-style: oblique 40deg;color:goldenrod">return</span>(amount)<br>...<br>rate = 3<br>pay = computePay(rate)</p>',

  scope:
    "in programming, this means the visibility of a variable ... locally visible within a function or method, or globally visible throughout a module",

  "local scope":
    'applies to variables defined with a block of code, like a function or method, loop<p style="font-size:smaller">def pay(scale):<br>&nbsp;# local variable, rate<br>&nbsp;# visible in <i>pay</i> only<br>&nbsp;<span style = "font-weight:900; font-style: oblique 40deg;color:goldenrod">rate</span> = 0.5*scale',
  "global scope":
    'applies to variables visible within entire module, like<p style="font-size:smaller"># global variable rate<br><span style = "font-weight:900; font-style: oblique 40deg;color:goldenrod">rate</span> = 2<br><br>def pay(scale):<br>&nbsp;global <span style = "font-weight:900; font-style: oblique 40deg;color:goldenrod">rate</span><br>&nbsp;salary = scale * <span style = "font-weight:900; font-style: oblique 40deg;color:goldenrod">rate</span><br>&nbsp;....</p>',
  "local variable":
    'variable defined with a code block, like a function or method, or loop - visible only within that block<p style="font-size:smaller">def pay(scale):<br>&nbsp;# local variable, rate<br>&nbsp;# visible in <i>pay</i> only<br>&nbsp;<span style = "font-weight:900; font-style: oblique 40deg;color:goldenrod">rate</span> = 0.5*scale\'',
  "global variable":
    'variable defined in global scope, <p style="font-size:smaller"># global variable rate<br><span style = "font-weight:900; font-style: oblique 40deg;color:goldenrod">rate</span> = 2<br><br>.....<br>def pay(scale):<br>&nbsp;global <span style = "font-weight:900; font-style: oblique 40deg;color:goldenrod">rate</span><br>&nbsp;salary = scale * <span style = "font-weight:900; font-style: oblique 40deg;color:goldenrod">rate</span><br>&nbsp;....</p>',
  "global variables Vs local variables":
    "generally, avoid the use of global variables - instead use parameters to pass data to blocks of code",
  "positional parameters":
    'parameters organized in order, actual parameters must match order<p style="font-size:smaller">def pay(<span style = "font-weight:900; font-style: oblique 40deg;color:goldenrod">scale, month</span>):<br>&nbsp...<br>jan_scale = 2<br>month = 1<br>pay(<span style = "font-weight:900; font-style: oblique 40deg;color:goldenrod">jan_scale, month</span>)</p>',
  "keyword argument":
    'specify parameter that argument is for, using name of parameter<p style="font-size:smaller">def compute(p1,p2):<br>&nbsp;....</p>  <table style="font-size:9px; width:25%; border:3;"><tr><td style="border: 1px solid black;">first = 1<br>second=2<br>compute(first, second)</td><td  style="border: 1px solid black;">compute(p2=second, p1=first)</td></tr></table>',
  "default argument":
    'default value if none passed. Last parameter.<p style="font-size:smaller">def compute(p1,p2,p3 = 99):<br>&nbsp;....</p>  <table style="font-size:9px; width:100%; border:3;"><tr><td style="border: 1px solid black;"># p3 is 99<br>first = 1<br>second=2<br>compute(first, second)</td><td  style="border: 1px solid black;"><br># p3 is 88<br>third = 88<br>compute(first, second, third)</td></tr></table>',
  "pass by value":
    "passing the <i>value</i> to function; only local changes made to value within function, original value outside function unchanged.",
  "pass by reference":
    "passing <i>address</i> of variable to function, any <i>changes made within function, are persisted outside the function</i>.",
  "pass by object reference":
    "Variable is passed to function, <i>as a copy</i>.Results in call by value appearance for immutable quantities, call by reference for non-primitives",
};
