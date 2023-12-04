# Concept

## Key

- super key (超键)
- candidate key (候选键)
- primary key (主键)
- foreign key (外键)

超键(super key): 在关系中能唯一标识元组的属性集称为关系模式的超键

候选键(candidate key): 不含有多余属性的超键称为候选键。也就是在候选键中，若再删除属性，就不是键了！

主键(primary key): 用户选作元组标识的一个候选键程序主键

外键(foreign key)：如果关系模式R中属性K是其它模式的主键，那么k在模式R中称为外键。

## Normal Form

### 1NF *1st Normal Form*

第一范式主要是保证数据表中的每一个字段的值必须具有原子性，也就是数据表中的每个字段的值是不可再拆分的最小数据单元

### 2NF *2nd Normal Form*

第二范式在第一范式的基础上，第二范式要求实体的属性完全依赖主关键字

### 3NF *3rd Normal Form*


