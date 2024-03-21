---
Title: "[[Design-Issues]]"
status: DONE
tags:
  - DataBase
  - NOTE
  - Lec4
Author:
  - AllenYGY
created: 2023-11-04T14:49
updated: 2024-03-21T21:38
---

# [[Design-Issues]]

- Design Techniques
- Attributes vs Entity
- Entity set vs Relationship set
- Weak entity sets
- Redundancies

## Design Techniques

1. Express all constraints (you can express!).
2. Use and do not change terminology and class structure of the application domain.
3. Keep it simple.
  Avoid defining entity types that do not serve any purpose.
  Don’t use an entity set when an attribute will do. Choose an entity set if it helps expressing constraints; otherwise, use an attribute.
4. Avoid redundancy (but derived attributes are okay)!
5. Limit the use of weak entity sets.

### There are also some decisions that you need to make during the design

- Attribute vs Entity
- Entity set vs Relationship set
- Strong entity sets vs Weak entity sets
- Binary relationship vs multi-ary relationship

Try to eliminate redundancy
In most cases, the answer is very subjective. It depends on the real-world problem.
Sometimes, the answers can be very different even on the same problem but with different assumptions.

#### *Attribute vs Entity*

It depends on the real case.
Both ER models have advantages and disadvantages.

#### Entity set vs Relationship set
