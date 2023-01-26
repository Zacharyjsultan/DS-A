CH: Progress Days
Challenge
To train for an upcoming marathon, Johnny goes on one long-distance run each Saturday. He wants to track how often the number of miles he runs this Saturday exceeds the number of miles run the previous Saturday. This is called a progress day.

Create a function that takes in an array of miles run every Saturday and returns Johnny's total number of progress days.

For example, progressDays([3, 4, 1, 2]) should return 2 because there are two progress days, (3->4) and (1->2)

Function Interface
function progressDays(miles) {
You can assume valid input

Test Cases
Input Output
[10, 11, 12, 9, 10] 3
[6, 5, 4, 3, 2, 9] 1
[9, 9] 0

=============================================================================

CH: Convenience Store
Challenge
Given a total due and an array representing the amount of change in your pocket, determine whether or not you are able to pay for the item. Change will always be represented in the following order: quarters, dimes, nickels, pennies.

To illustrate: changeEnough([25, 20, 5, 0], 4.25) should yield true, since having 25 quarters, 20 dimes, 5 nickels and 0 pennies gives you 6.25 + 2 + .25 + 0 = 8.50.

Notes
coin amount decimal
quarter 25 cents $0.25
dime 10 cents $0.10
nickel 5 cents $0.05
penny 1 cent $0.01
Function Interface
function changeEnough(coins, amount) {
You can assume valid input

Test Cases
Input Output
[2, 100, 0, 0], 14.11 false
[0, 0, 20, 5], 0.75 true
[30, 40, 20, 5], 12.55 true
[10, 0, 0, 50], 3.85 false
[1, 0, 5, 219], 19.99 false

================================================

CH: Jewels and Stones
Challenge
You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.

Letters are case sensitive, so "a" is considered a different type of stone from "A".

Function Interface
function countJewels(jewels, stones) {
1 <= jewels.length
stones.length <= 50
jewels and stones consist of only English letters.
All the characters of jewels are unique.
You can assume valid input

Test Cases
Input Output
jewels = "aA", stones = "aAAbbbb" 3
jewels = "z", stones = "ZZ" 0

============================================================================
CH: Progress Days
Challenge
To train for an upcoming marathon, Johnny goes on one long-distance run each Saturday. He wants to track how often the number of miles he runs this Saturday exceeds the number of miles run the previous Saturday. This is called a progress day.

Create a function that takes in an array of miles run every Saturday and returns Johnny's total number of progress days.

For example, progressDays([3, 4, 1, 2]) should return 2 because there are two progress days, (3->4) and (1->2)

Function Interface
function progressDays(miles) {
You can assume valid input

Test Cases
Input Output
[10, 11, 12, 9, 10] 3
[6, 5, 4, 3, 2, 9] 1
[9, 9] 0

==============================================================================

CH: Pluralize Words!
Challenge
Given a list of words in the singular form, return a set of those words in the plural form if they appear more than once in the list.

Notes
This is an oversimplification of the English language so no edge cases will appear.
Only focus on whether or not to add an s to the ends of words.
Function Interface
function pluralize(words) {
You can assume valid input

Test Cases
Input Output
["cow", "pig", "cow", "cow"] ["cows", "pig"]
["table", "table", "table"] ["tables"]
["chair", "pencil", "arm"] ["chair", "pencil", "arm"]
