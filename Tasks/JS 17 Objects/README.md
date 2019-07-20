# Classes

<dl>
<dt><a href="#Calculator">Calculator</a></dt>
<dd></dd>
<dt><a href="#Timer">Timer</a></dt>
<dd></dd>
</dl>

# Typedefs

<dl>
<dt><a href="#skill">skill</a> ⇒ <code>String</code></dt>
</dd>
</dl>

<a name="Calculator"></a>

# Calculator
**Kind**: global class

* [Calculator](#Calculator)
    * [new Calculator(num1, num2)](#new_Calculator_new)
    * [.##sum()](#Calculator+sum) ⇒ <code>Number</code>
    * [.##mul()](#Calculator+mul) ⇒ <code>Number</code>

<a name="new_Calculator_new"></a>

### new Calculator(num1, num2)
Has prototype methods that returns the sum and multiplication of values.


| Param | Type | Description |
| --- | --- | --- |
| num1 | <code>Number</code> | value 1 |
| num2 | <code>Number</code> | value 2 |

<a name="Calculator+sum"></a>

### calculator.##sum() ⇒ <code>Number</code>
Returns the sum of two values.

**Kind**: instance method of [<code>Calculator</code>](#Calculator)
<a name="Calculator+mul"></a>

### calculator.##mul() ⇒ <code>Number</code>
Returns multiplication of values.

**Kind**: instance method of [<code>Calculator</code>](#Calculator)
<a name="Timer"></a>

## Timer
**Kind**: global class

* [Timer](#Timer)
    * [new Timer(counter)](#new_Timer_new)
    * [.counter](#Timer+counter) : <code>Number</code>
    * [.##start()](#Timer+start) ⇒ <code>Number</code>
    * [.##reset()](#Timer+reset) ⇒ <code>Number</code>
    * [.##stop()](#Timer+stop) ⇒ <code>Number</code>

<a name="new_Timer_new"></a>

### new Timer(counter)
Has prototype methods start(), stop(), reset()


| Param | Type | Description |
| --- | --- | --- |
| counter | <code>Number</code> | Timer counter |

<a name="Timer+counter"></a>

### timer.counter : <code>Number</code>
**Kind**: instance property of [<code>Timer</code>](#Timer)
<a name="Timer+start"></a>

### timer.##start() ⇒ <code>Number</code>
Starts a timer with one second interval

**Kind**: instance method of [<code>Timer</code>](#Timer)
<a name="Timer+reset"></a>

### timer.##reset() ⇒ <code>Number</code>
Resets the timer to 0

**Kind**: instance method of [<code>Timer</code>](#Timer)
<a name="Timer+stop"></a>

### timer.##stop() ⇒ <code>Number</code>
Stops timer interval

**Kind**: instance method of [<code>Timer</code>](#Timer)
<a name="skill"></a>

## skill ⇒ <code>String</code>


**Kind**: global typedef
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| name | <code>String</code> | string 1 |
| level | <code>Number</code> | string 2 |
| start | <code>function</code> | Concatenates two variables and returns a new single string |

