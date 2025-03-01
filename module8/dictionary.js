/** @format */

const dictionary = {
  list: 'data structure that stores myltiple items, like<p style="font-size:smaller">pets = ["Mango", "Bulldog", "Jack"]',
  "list element":
    'item contained within a list, like<p style="font-size:smaller">pets = ["Mango the Cat", "Buhmie the Bulldog", "Jack the Terrier"]<br>"Mango the Cat" is the first element</p>',
  "create a list":
    'list created by <em>list function</em>, like<p style="font-size:smaller">names = list()</p>or initialization list, like<p style="font-size:smaller">names = []<br>names = ["Bridget", "Addie", "Helen"]</p>',
  "list index":
    'list elements accessed by <i>subscript</i>, starts at 0, indicates item position in list, like<p style="font-size:smaller">names = ["Bridget", "Addie", "Helen"]<br>names[0] is "Bridget"</p>',
  "list slicing":
    'returns a part of the list, indicated by a begining index and an ending index, like<p style="font-size:smaller">names = ["Ann", "Jo", "Mo","Sue", "El"]<br><span style = "font-weight:900; font-style: oblique 40deg;color:goldenrod">siblings = names[2:4]</span><br>siblings is ["Mo","Sue"]</p>',
  "empty list":
    'list with no elements, like<p style="font-size:smaller">names = []</p><p>Instantiating the list produces an empty list,names = list()<br>',

  "bounds error":
    'attempt to access element with index outside of list, like<p style="font-size:smaller">names = ["Ann", "Jo", "Mo","Sue", "El"]<br>&nbsp;<span style = "font-weight:900; font-style: oblique 40deg;color:goldenrod">name = names[13]... causes list index out of range</span>',
  "list method, append":
    'adds an item to the end of a list, like<p style="font-size:smaller">names = ["Mo", "Jo"]<br>names.append("Lu")<br>names is ...<br><span style = "font-weight:900; font-style: oblique 40deg;color:goldenrod">["Mo", "Jo", "Lu"]</span></p>',
  "list method, insert":
    'injects an item at a specific index location, like<p style="font-size:smaller">names = ["Mo", "Jo"]<br>names.insert(<span style = "font-weight:900; font-style: oblique 40deg;color:goldenrod">1</span>, "Lu")<br>names is ...<br><span style = "font-weight:900; font-style: oblique 40deg;color:goldenrod">["Mo", "Lu","Jo"]</span></p>',
  "list method, remove":
    'removes <em>first occurrence</em> of item, from list, like<p style="font-size:smaller">names = ["Mo", "Jo", "Mo"]<br>names.remove(<span style = "font-weight:900; font-style: oblique 40deg;color:goldenrod">"Mo"</span>)<br>names is ...<br><span style = "font-weight:900; font-style: oblique 40deg;color:goldenrod">["Jo","Mo"]</span></p>',
  "list method, extend":
    'adds content of another list, to original list, like<p style="font-size:smaller">names = ["Mo", "Jo"]<br>names2 = ["Lu", "Flo"]<br>names.extend(<span style = "font-weight:900; font-style: oblique 40deg;color:goldenrod">names2</span>)<br>names is ...<br><span style = "font-weight:900; font-style: oblique 40deg;color:goldenrod">["Jo","Mo", "Lu", "Flo"]</span></p>',
  "list method, reverse":
    'reverses the order of the list, like<p style="font-size:smaller">names = ["Mo", "Jo", "Lu"]<br>names.reverse()<br><br>names is ...<br><span style = "font-weight:900; font-style: oblique 40deg;color:goldenrod">["Lu", "Jo", "Mo"]</span></p>',
  "list method, sort":
    'sorts list, ascending by default, like<p style="font-size:smaller">noms=["Mo","Jo","Lu"]<br>noms.sort()<br>noms is ...<br><span style = "font-weight:900; font-style: oblique 40deg;color:goldenrod">["Jo","Lu","Mo"]</span><br>noms.sort(reverse=True)<br><br>noms is ...<br><span style = "font-weight:900; font-style: oblique 40deg;color:goldenrod">["Mo","Lu","Jo"]</span></p>',
  "list function, len":
    'returns the number of elements in a list, like<p style="font-size:smaller">noms=["Mo","Jo","Lu"]<br>numItems = len(noms)<br>numItems in <br><span style = "font-weight:900; font-style: oblique 40deg;color:goldenrod">noms</span> is 3</p>',
  "list function, max":
    'returns maximum of elements in list, alphabetically, numerically, like<p style="font-size:smaller">noms=["Mo","Jo","Lu"]<br>maxVal = max(noms)<br>maxVal is <span style = "font-weight:900; font-style: oblique 40deg;color:goldenrod">"Mo"</span><br>nums=[2,3,1]<br>maxVal = max(nums)<br>maxVal is <span style = "font-weight:900; font-style: oblique 40deg;color:goldenrod">3</span></p>',
  "list function, min":
    'returns minimum of elements in list, alphabetically, numerically, like<p style="font-size:smaller">noms=["Mo","Jo","Lu"]<br>minVal = min(noms)<br>minVal is <span style = "font-weight:900; font-style: oblique 40deg;color:goldenrod">"Jo"</span><br>nums=[2,3,1]<br>minVal = min(nums)<br>minVal is <span style = "font-weight:900; font-style: oblique 40deg;color:goldenrod">1</span></p>',
  "list function, sum":
    'returns sum of elements in list, assumes numeric items, like<p style="font-size:smaller"><span style = "font-weight:900; font-style: oblique 40deg;color:goldenrod">nums=[2,3,1]<br>sum(nums) is <span style = "font-weight:900; font-style: oblique 40deg;color:goldenrod">6</span></p>',
  "list function, shuffle":
    'shuffles list randomly, like<p style="font-size:smaller"><span style = "font-weight:900; font-style: oblique 40deg;color:goldenrod">nums=[1,2,3]<br>shuffle(nums) may be<span style = "font-weight:900; font-style: oblique 40deg;color:goldenrod">[1,2,3] .. [1,3,2] ...[2,1,3] ... </span></p>',
  "traversing a list, for .. in":
    'special for loop, iterates over sequence such as list, like<p style="font-size:smaller"><span style = "font-weight:900; font-style: oblique 40deg;color:goldenrod">nums=[1,2,3]<br>for num in nums:<br>&nbsp;<span style = "font-weight:900; font-style: oblique 40deg;color:goldenrod">print(num)</span></p>',
  "traversing a list, for loop":
    'regular for loop, used with index to iterate over list, like<p style="font-size:smaller"><span style = "font-weight:900; font-style: oblique 40deg;color:goldenrod">nums=[1,2,3]<br>n = len(nums)<br>for i in range(n):<br>&nbsp;<span style = "font-weight:900; font-style: oblique 40deg;color:goldenrod">print(nums[i])</span></p>',
  "traversing a list, while loop":
    'regular while loop, used with index to iterate over list, like<p style="font-size:smaller"><span style = "font-weight:900; font-style: oblique 40deg;color:goldenrod">nums=[1,2,3]<br>n = len(nums)<br>while (i < n):<br>&nbsp;<span style = "font-weight:900; font-style: oblique 40deg;color:goldenrod">print(nums[i])<br>&nbsp;i += 1</span></p>',
  "enumerate function":
    'takes sequence object, like list, returns <em style = "color: goldenrod">enumerate object</em> <span style="font-size:12px;">(list like object containing tuples, each tuple has index and item)</span>, like,<p style="font-size:smaller"><span style = "font-weight:900; font-style: oblique 40deg;color:goldenrod">noms=["Mo","Jo"]<br>print(enumerate(noms))<br>&nbsp;<span style = "font-weight:900; font-style: oblique 40deg;color:goldenrod">(0,"Mo") (1,"Jo") </span><br></p>',
  "traversing a list, enumerate":
    'way of accessing index and item at same time, like<p style="font-size:smaller"><span style = "font-weight:900; font-style: oblique 40deg;color:goldenrod">noms=["Mo","Jo"]<br>for pos, name in enumerate(noms):<br>&nbsp;print(pos, name)</p> <p>prints...<br><span style = "font-size: smaller;font-weight:900; font-style: oblique 40deg;color:goldenrod">0 "Mo"<br>1 "Jo"</span></p>',
};
