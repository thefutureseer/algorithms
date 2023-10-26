-- # Write your MySQL query statement below
-- #select from both and out put first, last name, city, state
select lastName, firstName, city, state from Person
 left join Address
 on Person.personId = Address.personID;

