/** @format */

const dictionary = {
  "volatile storage": 'computer memory, RAM, represents volatile storage, as the data dissipates when the power source is removed.',
  "permanent storage":
    'content stored on disk (HDD, SSD) persists for a period of time, until the disk media fails! This is considered permanent storage.',
  "advantages of a file":
    'data is stored permanently, can be retrieved and used as input to a processing operation.',
  "file object":
    'a <i>file object</i>, represents a reference or a file handle, which can be used to manipulate the file. A file object is returned by the open function,<p>fh = open("doc.txt", "w")',
  "file modes":
    'files can be opened for writing to, appending to, reading and more, like<p style="font-size:smaller">#write<br>fh = open("doc1.txt","w")<br>#append<br>fh = open("doc2.txt", "a")<br>#read, the default<br>fh = open("doc3.txt", "r")',
  "file handling exceptions":
    'attempting to read a file that does not exist, read from a file opened for writing, read a file with corrupt data ... will result in Python raising an exception. These exceptions could be<ul><li>FileNotFoundError</li><li>IOError</li><li>OSError</li></ul>',

  "file pointer":
    'the file pointer is a reference to the point in the file that is ready for an operation - this could be expressed in bytes from the start of the file, or lines from the start of the file.',
  "file method, read":
    'this method gets the full content of the file, starting from the current position of the file pointer, as a string, like<p style="font-size:smaller">fh = open("doc.txt")<span style = "font-weight:900; font-style: oblique 40deg;color:goldenrod"><br>allContent = fh.read()<br></span>',
  "file method, readline":
    'reads a line from file, from the current file pointer position, like<p style="font-size:smaller">line = fh.<span style = "font-weight:900; font-style: oblique 40deg;color:goldenrod">readline()</span><br><br>the readline method returns the empty string, "", when the end of file is reached',
  "file method, readlines":
    'reads <em>all</em> lines from the file, like<p style="font-size:smaller">allLines = fh.<span style = "font-weight:900; font-style: oblique 40deg;color:goldenrod">readlines()</span><br><br>...as a list of strings, ["line 1 ...", "line 2 ...", ...]',
  "file method, seek":
    'moves the file pointer a specified number of bytes from the start, like<p style="font-size:smaller">fh.seek(40)<br>... moves the file pointer 40 bytes from the start',
  "for loop, reading file":
    'the file handle can be used with a for loop, to iterate through each line in the file, like<p style = "font-weight:900; font-style: oblique 40deg;color:goldenrod">fh = open("doc.txt)<br>for line in fh:<br><span style = "font-weight:900; font-style: oblique 40deg;color:goldenrod">&nbsp;&nbsp;print(line)</span></p>',
  "file method, close":
    'when a file is opened, it should then be closed to protect the integrity of the data and to ensure successful subsequent access to the file, like<p style="font-size:smaller"><br>fh = open("doc.txt")<br><span style = "font-weight:900; font-style: oblique 40deg;color:goldenrod">.....<br>fh.close()<br>',

};
