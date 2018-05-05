# Text Drawing

A lightweight library contains some methods to create a string as your character drawing, you can also use it for more uses such as canvas.

```
 11111111111111111                                                                          111           111
1111111111111111111    111111111111111                                                     11111         11111
1111111111111111111    11111111111111111                1111          111                  11111         11111
1111111111111111111    111111111111111111             11111111     111111111               11111         11111
 11111 11111111111     11111 111111111111            11111111111  11111111111              11111         11111
       11111           11111        111111          111111111111 1111111111111             11111         11111
       11111           11111         11111         111111111111111111111111111             11111         11111
       11111           11111         111111        111111111111111111111111111             11111         11111
       11111           11111          11111        1111111111111111111111111111            11111         11111
       11111           11111          11111        1111111111111111111111111111            11111         11111
       11111           11111          11111        1111111111111111111111111111            11111         11111
       11111           11111          11111        111111111111111111111111111             11111         11111
       11111           11111          11111        111111111111111111111111111             11111         11111
       11111           11111          11111         11111111111111111111111111             11111         11111
       11111           11111          11111         1111111111111111111111111              11111         11111
       11111           11111          11111           1111111111111111111111               11111         11111
       11111           11111         111111            1111111111111111111                 111111        11111
       11111           11111         11111                11111111111111                    11111        11111
       11111           11111        111111                  1111111111                      11111       111111
       11111           111111111111111111                    1111111                        1111111    111111
       11111           11111111111111111                      11111                          1111111111111111
       11111           1111111111111111                        111                            11111111111111  
       11111           111111111111111                          11                             111111111111   
                                                                                                 1111111                                                    
```

## Features

* Convert one word, one line of words, or a paragraph of text to a character drawing.
* You can config some options for style of drawing, includes font size, font family, font weight, word spacing, line spacing, text align.
* Methods from this library depends on the canvas capabilities supported by modern browsers.

## Method & Usage

### 1. Word to drawing

#### Method:

`wordToDrawing`

#### Options:

| Options | Corresponds to | Default Value | Type/Value |
|:-:|:-:|:-:|:-:|
| word | one word as input | 'W' | `string` |
| fontSize | font-size | 40 | `number` |
| fontFamily | font-family | 'Microsoft Yahei' | `string` |
| fontWeight | font-weight | 'normal' | 'normal', 'bold', 'lighter', `number` |

#### Codes:

```js
import { wordToDrawing } from 'text-drawing';

const drawing = wordToDrawing({ word: '你', fontSize: 30 });
console.log(drawing);
```

#### Outputs:

```
------++++----+++-------------
------+++++--+++++------------
------+++++--+++++------------
-----+++++---++++-------------
-----+++++--+++++-------------
-----++++---++++++++++++++++++
----+++++--+++++++++++++++++++
----+++++--+++++++++++++++++++
---+++++--+++++----------+++++
---+++++--+++++---++++---+++++
--++++++-+++++---+++++--+++++-
--++++++-++++----+++++--+++++-
-+++++++--+++----+++++--++++--
++++++++-----+---+++++--++++--
++++++++----+++++++++++++++---
++++++++----+++++++++++++++---
++++++++---+++++-+++++-+++++--
+++-++++---+++++-+++++-+++++--
-+--++++---++++--+++++--+++++-
----++++--+++++--+++++--+++++-
----++++--++++---+++++---++++-
----++++-+++++---+++++---+++++
----++++-+++++---+++++---+++++
----+++++++++----+++++----++++
----+++++++++----+++++----++++
----++++--++-----+++++--------
----++++----++++++++++--------
----++++----+++++++++---------
----++++----+++++++++---------
----++++----++++++++----------
```

### 2. One line of text to drawing

#### Method:

`textToDrawing`

#### Options:

| Options | Corresponds to | Default Value | Type/Value |
|:-:|:-:|:-:|:-:|
| text | one line of text as input | 'Hello World!' | `string` |
| fontSize | font-size | 40 | `number` |
| fontFamily | font-family | 'Microsoft Yahei' | `string` |
| fontWeight | font-weight | 'normal' | 'normal', 'bold', 'lighter', `number` |
| wordSpacing | word-spacing | 4 | `number` |

#### Codes:

```js
import { textToDrawing } from 'text-drawing';

const drawing = textToDrawing({ text: '你好, Mike!', fontSize: 30 });
console.log(drawing);
```

#### Outputs:

```
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
------++++----+++---------------------++++-----------------------------------------------------------------------------------------------------------------------------
------+++++--+++++--------------------++++-----------------------------------------------------------------------+++-----++++------------------------------------------
------+++++--+++++--------------------++++----+++++++++++++++++-------------------++++++--------------+++++----++++++----++++-------------------------------------++++-
-----+++++---++++--------------------+++++----+++++++++++++++++-------------------++++++-------------++++++----++++++----++++------------------------------------+++++-
-----+++++--+++++--------------------+++++----+++++++++++++++++-------------------+++++++------------++++++----++++++----++++------------------------------------+++++-
-----++++---++++++++++++++++++-------+++++----+++++++++++++++++-------------------+++++++-----------+++++++-----++++-----++++------------------------------------+++++-
----+++++--+++++++++++++++++++----+++++++++++++---------++++++--------------------++++++++----------+++++++--------------++++------------------------------------+++++-
----+++++--+++++++++++++++++++----+++++++++++++--------++++++---------------------++++++++---------++++++++--------------++++------------------------------------+++++-
---+++++--+++++----------+++++----+++++++++++++------+++++++----------------------++++++++---------++++++++--------------++++----------------------++++----------+++++-
---+++++--+++++---++++---+++++----+++++++++++++------++++++-----------------------+++++++++--------++++++++-----++++-----++++-----++++++---------++++++++--------+++++-
--++++++-+++++---+++++--+++++-------+++++--++++------+++++------------------------+++++++++-------+++++++++----+++++-----++++----++++++--------++++++++++++------+++++-
--++++++-++++----+++++--+++++-------+++++-+++++------++++-------------------------++++++++++------+++++++++----+++++-----++++---++++++--------++++++++++++++-----+++++-
-+++++++--+++----+++++--++++--------++++--++++-------++++-------------------------++++++++++-----++++++++++----+++++-----++++--++++++---------++++++--++++++-----+++++-
++++++++-----+---+++++--++++--------++++--++++++++++++++++++++++------------------+++++++++++----++++++++++----+++++-----++++-++++++---------++++++----++++++----+++++-
++++++++----+++++++++++++++--------+++++--++++++++++++++++++++++------------------+++++-+++++---+++++++++++----+++++-----++++++++++----------+++++------+++++----+++++-
++++++++----+++++++++++++++--------+++++--++++++++++++++++++++++------------------+++++-+++++---+++++-+++++----+++++-----++++++++++----------++++++++++++++++----+++++-
++++++++---+++++-+++++-+++++-------++++--+++++++++++++++++++++++------------------+++++--+++++--+++++-+++++----+++++-----+++++++++-----------++++++++++++++++----+++++-
+++-++++---+++++-+++++-+++++-------+++++-++++--------++++-------------------------+++++--+++++-+++++--+++++----+++++-----++++++++-----------+++++++++++++++++----+++++-
-+--++++---++++--+++++--+++++------++++++++++--------++++-------------------------+++++---++++++++++--+++++----+++++-----+++++++++----------+++++++++++++++++----+++++-
----++++--+++++--+++++--+++++-------+++++++++--------++++-------------------------+++++---+++++++++---+++++----+++++-----++++++++++----------+++++---------------+++++-
----++++--++++---+++++---++++--------+++++++---------++++-------------------------+++++---+++++++++---+++++----+++++-----++++-++++++---------+++++---------------------
----++++-+++++---+++++---+++++---------++++++--------++++-------------++++--------+++++----+++++++----+++++----+++++-----++++-+++++++--------+++++--------+------------
----++++-+++++---+++++---+++++--------++++++++-------++++------------+++++--------+++++----+++++++----+++++----+++++-----++++--+++++++-------+++++++----++++-----+++++-
----+++++++++----+++++----++++-------+++++++++++-----++++------------+++++--------+++++-----++++++----+++++----+++++-----++++---+++++++-------++++++++++++++-----++++++
----+++++++++----+++++----++++------++++++++++++-----++++------------+++++--------+++++-----+++++-----+++++----+++++-----++++----+++++++-------+++++++++++++-----++++++
----++++--++-----+++++-------------++++++--++++------++++------------++++---------+++++------++++-----+++++----+++++-----++++-----++++++--------+++++++++++------+++++-
----++++----++++++++++------------++++++----++-++++++++++-----------+++++-------------------------------------------------------------------------+++++++---------+++--
----++++----+++++++++-------------+++++--------++++++++++-----------+++++----------------------------------------------------------------------------------------------
----++++----+++++++++-------------++++---------+++++++++------------++++-----------------------------------------------------------------------------------------------
----++++----++++++++---------------++-----------+++++++-------------++++-----------------------------------------------------------------------------------------------
--------------------------------------------------------------------++++-----------------------------------------------------------------------------------------------
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
```

### 3. One paragraph of text to drawing

#### Method:

`paragraphToDrawing`

#### Options:

| Options | Corresponds to | Default Value | Type/Value |
|:-:|:-:|:-:|:-:|
| paragraph | multiple lines of text as input | 'Hello,\nWorld!' | `string` |
| fontSize | font-size | 40 | `number` |
| fontFamily | font-family | 'Microsoft Yahei' | `string` |
| fontWeight | font-weight | 'normal' | 'normal', 'bold', 'lighter', `number` |
| wordSpacing | word-spacing | 4 | `number` |
| lineSpacing | line-spacing | 0 | `number` |
| textAlign | text-align | 'left' | 'left', 'center', 'right' |

#### Codes:

```js
import { paragraphToDrawing } from 'text-drawing';

const drawing = paragraphToDrawing({
  paragraph: '你好, Mike!\n我是 Parksben',
  fontSize: 30,
  textAlign: 'center',
});
console.log(drawing);
```

#### Outputs:

```
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
--------------------------------++++----+++---------------------++++------------------------------------------------------------------------------------------------------------------------------------------------------
--------------------------------+++++--+++++--------------------++++-----------------------------------------------------------------------+++-----++++-------------------------------------------------------------------
--------------------------------+++++--+++++--------------------++++----+++++++++++++++++-------------------++++++--------------+++++----++++++----++++-------------------------------------++++--------------------------
-------------------------------+++++---++++--------------------+++++----+++++++++++++++++-------------------++++++-------------++++++----++++++----++++------------------------------------+++++--------------------------
-------------------------------+++++--+++++--------------------+++++----+++++++++++++++++-------------------+++++++------------++++++----++++++----++++------------------------------------+++++--------------------------
-------------------------------++++---++++++++++++++++++-------+++++----+++++++++++++++++-------------------+++++++-----------+++++++-----++++-----++++------------------------------------+++++--------------------------
------------------------------+++++--+++++++++++++++++++----+++++++++++++---------++++++--------------------++++++++----------+++++++--------------++++------------------------------------+++++--------------------------
------------------------------+++++--+++++++++++++++++++----+++++++++++++--------++++++---------------------++++++++---------++++++++--------------++++------------------------------------+++++--------------------------
-----------------------------+++++--+++++----------+++++----+++++++++++++------+++++++----------------------++++++++---------++++++++--------------++++----------------------++++----------+++++--------------------------
-----------------------------+++++--+++++---++++---+++++----+++++++++++++------++++++-----------------------+++++++++--------++++++++-----++++-----++++-----++++++---------++++++++--------+++++--------------------------
----------------------------++++++-+++++---+++++--+++++-------+++++--++++------+++++------------------------+++++++++-------+++++++++----+++++-----++++----++++++--------++++++++++++------+++++--------------------------
----------------------------++++++-++++----+++++--+++++-------+++++-+++++------++++-------------------------++++++++++------+++++++++----+++++-----++++---++++++--------++++++++++++++-----+++++--------------------------
---------------------------+++++++--+++----+++++--++++--------++++--++++-------++++-------------------------++++++++++-----++++++++++----+++++-----++++--++++++---------++++++--++++++-----+++++--------------------------
--------------------------++++++++-----+---+++++--++++--------++++--++++++++++++++++++++++------------------+++++++++++----++++++++++----+++++-----++++-++++++---------++++++----++++++----+++++--------------------------
--------------------------++++++++----+++++++++++++++--------+++++--++++++++++++++++++++++------------------+++++-+++++---+++++++++++----+++++-----++++++++++----------+++++------+++++----+++++--------------------------
--------------------------++++++++----+++++++++++++++--------+++++--++++++++++++++++++++++------------------+++++-+++++---+++++-+++++----+++++-----++++++++++----------++++++++++++++++----+++++--------------------------
--------------------------++++++++---+++++-+++++-+++++-------++++--+++++++++++++++++++++++------------------+++++--+++++--+++++-+++++----+++++-----+++++++++-----------++++++++++++++++----+++++--------------------------
--------------------------+++-++++---+++++-+++++-+++++-------+++++-++++--------++++-------------------------+++++--+++++-+++++--+++++----+++++-----++++++++-----------+++++++++++++++++----+++++--------------------------
---------------------------+--++++---++++--+++++--+++++------++++++++++--------++++-------------------------+++++---++++++++++--+++++----+++++-----+++++++++----------+++++++++++++++++----+++++--------------------------
------------------------------++++--+++++--+++++--+++++-------+++++++++--------++++-------------------------+++++---+++++++++---+++++----+++++-----++++++++++----------+++++---------------+++++--------------------------
------------------------------++++--++++---+++++---++++--------+++++++---------++++-------------------------+++++---+++++++++---+++++----+++++-----++++-++++++---------+++++----------------------------------------------
------------------------------++++-+++++---+++++---+++++---------++++++--------++++-------------++++--------+++++----+++++++----+++++----+++++-----++++-+++++++--------+++++--------+-------------------------------------
------------------------------++++-+++++---+++++---+++++--------++++++++-------++++------------+++++--------+++++----+++++++----+++++----+++++-----++++--+++++++-------+++++++----++++-----+++++--------------------------
------------------------------+++++++++----+++++----++++-------+++++++++++-----++++------------+++++--------+++++-----++++++----+++++----+++++-----++++---+++++++-------++++++++++++++-----++++++-------------------------
------------------------------+++++++++----+++++----++++------++++++++++++-----++++------------+++++--------+++++-----+++++-----+++++----+++++-----++++----+++++++-------+++++++++++++-----++++++-------------------------
------------------------------++++--++-----+++++-------------++++++--++++------++++------------++++---------+++++------++++-----+++++----+++++-----++++-----++++++--------+++++++++++------+++++--------------------------
------------------------------++++----++++++++++------------++++++----++-++++++++++-----------+++++-------------------------------------------------------------------------+++++++---------+++---------------------------
------------------------------++++----+++++++++-------------+++++--------++++++++++-----------+++++-----------------------------------------------------------------------------------------------------------------------
------------------------------++++----+++++++++-------------++++---------+++++++++------------++++------------------------------------------------------------------------------------------------------------------------
------------------------------++++----++++++++---------------++-----------+++++++-------------++++------------------------------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------++++------------------------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
---------------+++++------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
----------++++++++++--++--------------++++++++++++++++++++++-----------------------------------------------------------------++++--------------------------------++++-----------------------------------------------------
--++++++++++++++++++-++++-------------++++++++++++++++++++++------------+++++++++++------------------------------------------++++--------------------------------++++-----------------------------------------------------
++++++++++++++++++++++++++------------++++++++++++++++++++++------------+++++++++++++----------------------------------------++++--------------------------------++++-----------------------------------------------------
++++++++++++++++++++-++++++-----------++++++++++++++++++++++------------++++++++++++++---------------------------------------++++--------------------------------++++-----------------------------------------------------
-+++++++++-----+++++--++++++----------++++--------------++++------------+++++++++++++++--------------------------------------++++--------------------------------++++-----------------------------------------------------
--+---++++-----+++++---++++++---------++++++++++++++++++++++------------+++++---++++++++-------------------------------------++++--------------------------------++++-----------------------------------------------------
------++++-----+++++----++++----------++++++++++++++++++++++------------+++++-----++++++-------------------------------------++++--------------------------------++++-----------------------------------------------------
------++++------++++-----++-----------++++++++++++++++++++++------------+++++------+++++----------+++++---------------++-----++++--------------------++++--------++++---++++-----------------++++-----------------++++----
++++++++++++++++++++++++++++++--------++++--------------++++------------+++++------+++++-------++++++++++------++++++++++----++++-----++++++------++++++++++-----++++-++++++++-------------++++++++--------++++-++++++++--
++++++++++++++++++++++++++++++--------++++++++++++++++++++++------------+++++------+++++------++++++++++++-----++++++++++----++++----++++++------+++++++++++-----+++++++++++++++---------++++++++++++------++++++++++++++-
++++++++++++++++++++++++++++++--------++++++++++++++++++++++------------+++++------+++++------+++++++++++++----++++++++++----++++---++++++------++++++++++++-----+++++++++++++++--------++++++++++++++-----+++++++++++++++
-++++-++++-++++-++++-++++++-++--------++++++++++++++++++++++------------+++++-----++++++------+++++--++++++----++++++++++----++++--++++++-------++++++--++++-----+++++++--+++++++-------++++++--++++++-----+++++++--++++++
------++++------++++----++++----------++++++++++++++++++++++------------+++++----++++++-------+++-----+++++----++++++--------++++-++++++--------+++++------------++++++-----+++++------++++++----++++++----+++++-----+++++
------++++------++++----+++++---------++++--------------++++------------+++++++++++++++----------------++++----+++++---------++++++++++---------+++++------------+++++------++++++-----+++++------+++++----+++++-----+++++
------++++-++++++++++--++++++-----++++++++++++++++++++++++++++++--------++++++++++++++-----------++++++++++----+++++---------++++++++++---------+++++++----------+++++-------+++++-----++++++++++++++++----+++++-----+++++
-----++++++++++++++++-++++++------++++++++++++++++++++++++++++++--------+++++++++++++----------++++++++++++----+++++---------+++++++++----------+++++++++--------+++++-------+++++-----++++++++++++++++----+++++-----+++++
+++++++++++++++++++++++++++-------++++++++++++++++++++++++++++++--------+++++++++++-----------+++++++++++++----+++++---------++++++++------------++++++++++------++++--------+++++----+++++++++++++++++----++++------+++++
++++++++++++++++++++++++++--------------+++----+++++--------------------+++++----------------++++++++++++++----++++----------+++++++++-------------+++++++++-----++++--------+++++----+++++++++++++++++----++++------+++++
+++++++++++------++++++++--------------+++++---+++++--------------------+++++---------------++++++----+++++----++++----------++++++++++--------------+++++++-----+++++------++++++-----+++++---------------++++------+++++
++++++++++-------+++++++---+-----------++++----+++++++++++++++----------+++++---------------+++++-----+++++----++++----------++++-++++++---------------++++++----+++++------+++++------+++++---------------++++------+++++
------++++------+++++++---++++--------+++++----+++++++++++++++----------+++++---------------+++++-----+++++----++++----------++++-+++++++---------------+++++----+++++------+++++------+++++--------+------++++------+++++
------++++-----+++++++----++++--------+++++----+++++++++++++++----------+++++---------------++++++---++++++----++++----------++++--+++++++------+++----++++++----+++++++--+++++++------+++++++----++++-----++++------+++++
------++++---++++++++++---++++-------+++++++---+++++--------------------+++++----------------++++++++++++++----++++----------++++---+++++++-----++++++++++++-----+++++++++++++++--------++++++++++++++-----++++------+++++
------++++-+++++++++++++--++++-------+++++++++-+++++--------------------+++++----------------++++++++++++++----++++----------++++----+++++++----++++++++++++-----++++++++++++++----------+++++++++++++-----++++------+++++
------++++++++++++-++++++-++++------++++++++++++++++--------------------+++++-----------------+++++++++++++----++++----------++++-----++++++----++++++++++-------+++++++++++++------------+++++++++++------++++------+++++
-+++++++++++++++----++++++++++-----+++++-+++++++++++++++++++++++--------------------------------+++++---------------------------------------------++++++---------------+++++----------------+++++++-----------------------
-+++++++++-+++------++++++++++----++++++---+++++++++++++++++++++----------------------------------------------------------------------------------------------------------------------------------------------------------
-+++++++++-----------++++++++-----+++++------+++++++++++++++++++----------------------------------------------------------------------------------------------------------------------------------------------------------
-+++++++---------------+++++------++++------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
-----------------------------------++-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
```

## License

MIT license