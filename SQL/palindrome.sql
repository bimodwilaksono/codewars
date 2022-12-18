-- # write your SQL statement here: 
-- you are given a table 'ispalindrome' with column 'str', 
--return a table with column 'str' and your result in a column named 'res'.
select str, case when lower(str) = lower(reverse(str)) then true else false end as res from ispalindrome;