# *From Gates to Circuits II: Sequential Circuits*

## *Sequential Circuits*

Sequential circuits’ output depends not only on its current inputs, but also its previous inputs (current state)

$Sequential$ $Circuits$ = $Combinational$ $Circuits$ $+$ $Memory$
<img src='https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@main/uPic/tylAV6.jpg' alt='tylAV6'/>

### *One bit memory*

- It should be able to hold a single bit, 0 or 1.
- You should be able to read the bit that was saved.
- You should be able to change the bit. There are only two choices:
  - Set the bit to 1
  - Reset, or clear, the bit to 0.

#### *SR NOR Latch (or Flip-flop)*

<img src='https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@main/uPic/No7sF8.jpg' alt='No7sF8'/>

- Input:
  - $S$: set
  - $R$: reset
  - $Q,\overline Q$
- Output:
  - $Q,\overline Q$

- Set Function:
When $S=1,R=0$ $\Rightarrow \{\overline {Q}=0, Q=1\}$
Then change $S=0,R=0$ lock the state $\Rightarrow \{\overline {Q} = 0, Q=1\}$

- Reset Function:
When $S=0,R=1$ $\Rightarrow \ {\overline{Q}=1,Q=0}$
Then change $S=0,R=0$ lock the state $\Rightarrow \{\overline {Q} = 1, Q=0\}$

When $S=1,R=1$
$\Rightarrow \ {\overline{Q}=1,Q=0}$ if $\overline {Q}$ reach first
$\Rightarrow \ {\overline{Q}=0,Q=1}$ if $ {Q}$ reach first
<img src='https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@main/uPic/PRXb7m.jpg' alt='PRXb7m'/>

- For inputs SR = 00, the next value of Q could be either or 1, depending on the current value of Q.
- So the same inputs can yield different outputs, depending on whether the latch was previously set or reset.
- This is very different from the combinational circuits that we’ve seen so far, where the same inputs always yield the same outputs.
