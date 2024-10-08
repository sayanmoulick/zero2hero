/*
Given a string without spaces, the task is to remove duplicates from it.
Note: The original order of characters must be kept the same. 
Example 1:
Input: 
S = "zvvo"
Output: "zvo"
Explanation: Only keep the firstoccurrence

Example 2:
Input: 
S = "gfg"
Output: gf
Explanation: Only keep the firstoccurrence

Expected Time Complexity: O(|s|)
Expected Auxiliary Space: O(constant)Constraints:

1 <= |S| <= 105
S conatins lowercase english alphabets
*/

class Solution {
  removeDups (str) {
    //code here
    let oneCharStr = '';
    let mc = {};
    for (let i = 0; i < str.length; i++) {
      if (!mc[str[i]]) {
        oneCharStr += str[i];
        mc[str[i]] = 1;
      } else {
        mc[str[i]] += 1;
      }
    }
    return oneCharStr;
  }
}
