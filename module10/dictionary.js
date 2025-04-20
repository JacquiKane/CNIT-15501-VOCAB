/** @format */

const dictionary = {
  "exception": 'error condition that may cause a program to crash, like <p style = "font-weight:900; font-style: oblique 40deg;color:goldenrod"><ul><li><span style = "font-weight:900; font-style: oblique 40deg;color:goldenrod">FileNotFoundError</span>, attempt to open file has failed<li><span style = "font-weight:900; font-style: oblique 40deg;color:goldenrod">ValueError</span>, function receives argument that is not he correct type</ul></p>',
  "try-except block":
    'A structure for catching error conditions, so these conditions can be handled, like <p style = "font-weight:900; font-style: oblique 40deg;color:goldenrod">try:<br>&nbsp;#code, may fail<br>except:<br>&nbsp;#code, handles fail</p>',
  "advantages of exception handling":
    '<ul><li>error conditions that may cause a program to fail, can be handled gracefully<li>information about the error can be reported in standard format</ul>',
  "else block":
    'if no exceptions raised as result of code in try block, code in else block is executed, like <p style = "font-weight:900; font-style: oblique 40deg;">try:<br>&nbsp;#code, may fail<br>except:<br>&nbsp;#code, handles fail<br><span style = "font-weight:900; font-style: oblique 40deg;color:goldenrod">else:<br>&nbsp;print("Success!")</span></p>',
  "finally block":
    'code in finally block is executed <i>always</i>, exception or not, like  <p style = "font-weight:900; font-style: oblique 40deg;">try:<br>&nbsp;#code, may fail<br>except:<br>&nbsp;#code, handles fail<br>else:<br>&nbsp;print("Success!")<br><span style = "font-weight:900; font-style: oblique 40deg;color:goldenrod">finally:<br>&nbsp;print("Finished!")</span></p>',
  "file handling exceptions":
    'attempting to read a file that does not exist, read from a file opened for writing, read a file with corrupt data ... will result in Python raising an exception. These exceptions could be<ul><li><span style = "font-weight:900; font-style: oblique 40deg;color:goldenrod">FileNotFoundError</span></li><li><span style = "font-weight:900; font-style: oblique 40deg;color:goldenrod">IOError</span></li><li><span style = "font-weight:900; font-style: oblique 40deg;color:goldenrod">OSError</span></li></ul>',
  "input value exception":
    'this occurs when an input value is not in the correct format, like  <p style = "font-weight:900; font-style: oblique 40deg;">try:<br>&nbsp;<span style = "font-weight:900; font-style: oblique 40deg;color:goldenrod">num = int("1a")</span><br><span style = "font-weight:900; font-style: oblique 40deg;color:goldenrod">except ValueError as e:<br>&nbsp;print(f"Value! {e})</span><br>else:<br>&nbsp;print("Success!")</p>',
  "inaccurate type error":
    'this occurs when an operation is attempted, and an invalid data type is used, like<p style = "font-weight:900; font-style: oblique 40deg;">try:<br>&nbsp;<span style = "font-weight:900; font-style: oblique 40deg;color:goldenrod">num = "1" + 2<br>except TypeError as e:<br>&nbsp;print(f"Type! {e})</span><br>else:<br>&nbsp;print("Success!")</p>',
  "custom exceptions":
    'when an exception is diagnosed, an Exception object results - exceptions are instances of <span style = "font-weight:900; font-style: oblique 40deg;color:goldenrod">Exception</span> class, and sub-classes. A custom exception <span style = "font-weight:900; font-style: oblique 40deg;color:goldenrod">class</span> can be created, by inheriting from Exception, like<p><span style = "font-weight:900; font-style: oblique 40deg;color:goldenrod">class New(Exception):<br>&nbsp;....</span><br>',
      "subclassing Exception":
    'A custom exception can be defined, by sub-classing Exception class, like<p><span style = "font-weight:900; font-style: oblique 40deg;color:goldenrod">class New(Exception):<br>&nbsp;print("New!")</span><br><br>try:<br>&nbsp;<span style = "font-weight:900; font-style: oblique 40deg;color:goldenrod">raise New("New error!")<br>except New as e:<br>&nbsp;print(e)</span></p>',
};
