# Assignment 6

## Question1
a) $C(12,2)=66$
b)  $C(13,3)=286$
c) $\therefore x+y+z=10$
	   $x+2y+5z\leq20$
There are only 3 situations  z=2,1,0
when $z=2$ then $y=2,1,0$  
		                   $x=6,7,8$
when $z=1$ then $y=6,5,4,3,2,1,0$
                           $x=3,4,5,6,7,8,9$
when $z=0$ then $y=10,9,8, 7,6,5,4,3,2,1,0$ 
           			    $x=0,1,2,3,4,5,6,7,8,9,10$
$\therefore$ There are totally 21 ways to pick 10 coins such that the total amount is at most ￥20

## Question2
a) $\because f$ neither an injection nor a surjection 
 $\therefore$ There are $(C(2,1)\times(C(4,1)+C(4,2)))+C(4,0)\times3=63$ kinds of function $f$
b) $\because f$ is an injection 
 $\therefore $ There are $C(5,4)\times P(4,4)=120$ kinds of function $f$
c) $\because f$ is a surjection
 $\therefore $ There are $C(4,2)\times P(3,3)=36$ kinds of function $f$
d) $\because f$ is an bijection
$\therefore $ the element number must be equal between A and B
e)  
	 a: 
     b:  $P(m,n)$ =m!/ (m-n)!    $(n\leq m)$
		         $0$                           $(n>m)$
     c:  $C(m,n-1)\times P(n,n)$
     d:  if n = m The number of bijections from a set A with n elements to a set B with m elements is $n!$  
	     if n$\ne$ m The number of bijections from a set A with n elements to a set B with m elements is $0$. 

## Question3
$\because f$ is injection $\therefore $is a one to one function
$\because |A|>|B| $ If A are placed into B, then there is at least one box containing at least 2 objects.
$\therefore $ It can't be an injection function

## Question4
Suppose the length of the string is n 
$a_n$ is the number of binary strings
$a_1=1$  $a_2=2$
$\because a_n $ can be composed of two parts  ${n-1}_{odd}+'0'$ and ${n-1}_{even}+'1'$
		${n-1}_{odd}+'0':$   $a_n-1$ 
		${n-1}_{even}+'1':$  $2^{n-1}-a_{n-1}$
$\therefore$ $a_n=a_{n-1}+2^{n-1}-a_{n-1}=2^{n-1}$

## Question5
Suppose that $r^2 -7r+10=0$
$\therefore r_1=2$    $ r_2=5$
$\therefore a_n=\alpha_12^n+\alpha_25^n$
$a_0=2=\alpha_1+\alpha_2$
$a_1=1=2\alpha_1+5\alpha_2$
$\therefore \alpha_1=3$     $\alpha_2=-1$
$\therefore a_n=3*2^n-5^n$