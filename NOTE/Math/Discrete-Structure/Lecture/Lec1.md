# Logic and Proofs----Propositional Logic

## Declarative sentence

* A declarative sentence (陈述句) is a sentence that aims to declare a fact.
    >eg: Today is Saturday.
* 疑问句/祈使句...(不是)

## Proposition

* A proposition is a declarative sentence that is either true or false.

### Propositional Variables

* Use variables (English letters) to represent propositions.

#### Truth Value

* Assigned to propositional variables.
    >True: represented by T
    >False: represented by F
    >
### Propositional Operators

* Logical negation (indicated by ¬ , ! , or ⁻)  非
* Logical conjunction (indicated by ∧, &&, or ·) 与  合取
* Logical disjunction (indicated by ∨, ||, or +) 或  析取
* Logical exclusive disjunction (indicated by ⊕) 异或

#### Logical implication (indicated by →)

$$p→q$$

* p when q
<img src='https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@main/uPic/img_1.png' alt='img_1'/>
<img src="./Images/img_1.png" width="500" height="200" style="text-align: center">

> p is the sufficient condition for q; q is the necessary condition for p
    * False always true

* Contrapositive（质位变换命题, 逆否命题: $\neg q\rightarrow \neg p$
* Converse (逆命题)：$q\rightarrow p$
* Inverse (否命题)：$\neg p \rightarrow \neg q $

#### Logical bidirectional implication (indicated by ↔)

$$p ↔ q$$

* p if and only if q
* if p then q
<img src='https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@main/uPic/img_2.png' alt='img_2'/>


### Compound（复合）Propositions

* A compound proposition involves a number of propositional variables and logical operators. <img src='https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@main/uPic/img_3.png' alt='img_3'/>
$(p\wedge q)\vee r$ does not mean $p \wedge (q\vee r)$

## Specification Consistency

* Equivalently, if a specification {$p_1,p_2,...p_n$} is consistent, then the compound proposition $p_1\wedge p_2\wedge...\wedge p_n$ is true for at least one assignment
* If the specification is inconsistent, then $p_1\wedge p_2\wedge...\wedge p_n$ is always false.
