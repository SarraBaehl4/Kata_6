# Kata 6

# 🥤 Fizz Buzz

Écris une fonction `fizzBuzz()` qui prend en paramètre un nombre `n`.

La fonction doit retourner un tableau de chaînes de caractères `answer` (indexé à partir de 1).

Voici les règles pour remplir ce tableau :

- `answer[i] == "FizzBuzz"` si `i` est divisible par `3` ET `5`.
- `answer[i] == "Fizz"` si `i` est divisible uniquement par `3`.
- `answer[i] == "Buzz"` si `i` est divisible uniquement par `5`.
- `answer[i] == i` si aucune des conditions précédentes n’est vraie.

Le tableau fait la taille donnée par le nombre `n` donné en paramètre de la fonction.

## 🔍 Exemples

```jsx
fizzBuzz(3);
// retourne ["1", "2", "Fizz"]

fizzBuzz(5);
// retourne ["1", "2", "Fizz", "4", "Buzz"]

fizzBuzz(15);
// retourne 
// ["1", "2", "Fizz", "4", "Buzz", "Fizz", "7", "8", "Fizz", "Buzz", "11", "Fizz", "13", "14", "FizzBuzz"]
```

---

# 🎯 Two Sum

Tu as une liste de nombres appelée `number` (par exemple : `[2, 7, 11, 15]`) et un nombre cible appelé `target` (par exemple : `9`).

Écris une function `twoSum()` qui permet de **retrouver deux nombres dans la liste qui, une fois additionnés, donnent exactement le total `target`**.

Les règles à respecter :

- La fonction doit **retourner les *positions* (ou indices)** de ces deux nombres dans un tableau (et pas les nombres eux-mêmes).
- Tu ne peux **pas utiliser deux fois le même nombre** (c’est-à-dire que tu ne peux pas prendre deux fois l’indice d’un même élément).
- Tu peux **rendre les indices dans n'importe quel ordre**.

## 🔍 Exemples

```jsx
// Exemple 1
const numbers = [2, 7, 11, 15];
const target = 9;

twoSum(numbers, target);
// retourne [0, 1]
// Explication : 2 (à l’indice 0) + 7 (à l’indice 1) = 9

// Exemple 2
const numbers = [3, 2, 4]
const target = 6
twoSum(numbers, target);
// retourne [1, 2]

// Exemple 3
const numbers = [3, 3]
const target = 6
twoSum(numbers, target);
// retourne [0, 1]
```

---

# 🚪 **Parenthèses valides**

Écris une fonction `isValid()` qui prend en paramètre une chaîne de caractère `str` contenant uniquement les caractères `'('`, `')'`, `'{'`, `'}'`, `'['` et `']'`, et qui retourne si cette chaîne est **valide** ou non.

Une chaîne est considérée comme valide si elle respecte **toutes les règles suivantes** :

1. Les parenthèses ouvrantes doivent être **fermées par le même type de parenthèse**.
2. Les parenthèses doivent être **fermées dans le bon ordre**.
3. Chaque parenthèse fermante doit avoir **une parenthèse ouvrante correspondante du même type**.

Pour information, `str` ne contient **que** les caractères : `'('`, `')'`, `'{'`, `'}'`, `'['`, `']'`.

### 🔍 Exemples

```jsx
const str = "()"
isValid(str);
// retourne `true`
    
const str = "()[]{}"
isValid(str);
// retourne `true`
    
const str = "(]"
isValid(str);
// retourne `false`
    
const str = "([])"
isValid(str);
// retourne `true`
```