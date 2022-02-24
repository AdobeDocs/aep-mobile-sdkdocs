#### Java

**Syntax**

```java
public void updateCurrentPlayhead(double time);
```

**Example**

```java
_tracker.updateCurrentPlayhead(1);
```

**Live streaming example**

```java
double timeFromMidnightInSecond = (System.currentTimeMillis()/1000) % 86400;

_tracker.updateCurrentPlayhead(timeFromMidnightInSecond);
```