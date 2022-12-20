-- # write your SQL statement here: 
-- you are given a table 'removechar' with column 's', 
-- return a table with column 's' and your result in a column named 'res'.
select s, regexp_replace(s, '^[\w]|[\w]$', '', 'g') as res from removechar;