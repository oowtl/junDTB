# ECMAScript 에서 Truthy 와 Falsy는 없다?

**[ECMAScript 명세](https://tc39.es/ecma262/) 에서 Truthy 와 Falsy 라는 단어는 없습니다**

Truthy 와 Falsy 는 학습을 위해서, 설명하기 위해서 만들어진 단어입니다. ([MDN 문서](https://developer.mozilla.org/ko/docs/Glossary/Falsy)에서 Truthy 와 Falsy 라는 단어를 학습할 수 있습니다.)



## ECMAScript 에서의 Falsy

결론은 **"falsy 에 해당하는 값들이 `false`를 반환하는 인수라고 명세되어 있으며, ECMAScript 명세에는 Truthy, Falsy 라는 단어를 찾을 수 없다."** 입니다.



Truthy, Falsy 라는 단어는 문맥상 표현식이 Boolean으로 평가되어야 하는 경우에 사용됩니다.

그래서 문맥 상 표현식을 Boolean 으로 평가되어야 하는 경우인 if 문에 대해서 찾아 보았습니다.

[ECMAScript-if statement - evaluation](https://tc39.es/ecma262/#sec-if-statement-runtime-semantics-evaluation) 에서 단서를 찾을 수 있었습니다.

> Let exprValue be [ToBoolean](https://tc39.es/ecma262/#sec-toboolean)(? [GetValue](https://tc39.es/ecma262/#sec-getvalue)(exprRef)).
>
> exprValue를 ToBoolean(? GetValue(exprRef))로 설정합니다.

의미를 명확하게 해석할 수는 없지만 `ToBoolean` 을 통해서 값을 설정한다는 것을 알 수 있습니다.



[ECMAScript-ToBoolean](https://tc39.es/ecma262/#sec-toboolean) ,[ECMAScript-isHTMLDDA internal slot-Changes to toBoolean](https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot-to-boolean) 문서에서 일부 발췌한 문장입니다. 

>If argument is one of undefined, null, +0𝔽, -0𝔽, NaN, 0ℤ, or the empty String, return false.
>
>If argument is an Object and argument has an [[IsHTMLDDA]] internal slot, return false.
>
>인수가 정의되지 않음, null, +0𝔽, -0𝔽, NaN, 0ℤ 또는 빈 문자열 중 하나인 경우 false를 반환합니다.
>
>인수가 객체이고 인수에 [[IsHTMLDDA]] 내부 슬롯이 있는 경우 false를 반환합니다.

falsy 에 해당하는 값들이 `false`를 반환하는 인수라고 명세되어 있으며, ECMAScript 명세에는 Truthy, Falsy 라는 단어를 찾을 수 없습니다.

그래서 **"Falsy 라는 단어는 ECMAScript 에서 명세하지 않고 구별하기 편하게 만들어 낸 단어이다."** 라는 결론을 내릴 수 있게 되었습니다.

여담으로 `ToBoolean()` 은 암묵적인 타입 변환에 해당하는 내용입니다. MDN 이나 프로퍼티 디스크립터를 통해서 찾아보았는데 해당하는 내용을 찾을 수 없었습니다. 그래서 런타임에 동작하는 기능이거나 기능의 이름이 아닌 동작을 명세한 것이 아닐까 추측하고 있습니다. (이 부분에 대해서 알고 계시는 사항이 있으시다면, 첨언을 부탁드립니다. 궁금합니다...)



## 두 가지 궁금증

여기에서 저는 두 가지의 궁금증이 생겼습니다.

1. `+0𝔽, -0𝔽` 는 무엇을 뜻하는 것일까?
2.  `null, +0𝔽, -0𝔽, NaN, 0ℤ, empty String` 을 제외하고 `Object and argument has an [[IsHTMLDDA]] internal slot` 은 무엇일까?



### `+0𝔽, -0𝔽` 는 무엇을 뜻하는 것일까?

결론은 **"`+0𝔽, -0𝔽`  는  0에 가장 가깝지만 음수는 아닌 수입니다."** 입니다.



ECMAScript 명세에서 찾아가보도록 하겠습니다. 물론 MDN 문서에서 바로 확인할 수 있습니다.

> Note that there is both a positive zero and a negative zero.
>
> For brevity, these values are also referred to for expository purposes by the symbols +0𝔽 and -0𝔽, respectively. (Note that these two different zero Number values are produced by the program expressions `+0` (or simply `0`) and `-0`.)
>
>
> 양의 0과 음의 0이 모두 있다는 점에 유의하세요.
>
> 간결함을 위해 이러한 값은 설명 목적으로 각각 +0𝔽 및 -0𝔽 기호로 참조됩니다. (이러한 두 개의 서로 다른 0 숫자 값은 프로그램 표현식 +0(또는 간단히 0) 및 -0에 의해 생성됩니다.)

[ECMAScript-number type](https://tc39.es/ecma262/#sec-ecmascript-language-types-number-type) 문서에서 발췌한 내용입니다.

정확하게 무엇을 뜻하는 지를 발췌하지 않았습니다. 왜냐하면 설명을 보고도 이해를 할 수 없었기 때문입니다. (어렵습니다..)



그래서 MDN 에서 찾아보았고 답을 발견했습니다.

>[`Number`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Number) 타입은 [배정밀도 64비트 이진 형식 IEEE 754 값](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Number#number_encoding)입니다.
>
>2^-1074 ([`Number.MIN_VALUE`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Number/MIN_VALUE)) 와 2^1024 ([`Number.MAX_VALUE`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_VALUE)) 사이의 양수 부동 소수점 뿐만 아니라, -2^-1074 와 -2^1024 사이의 음수 부동 소수점 숫자도 저장할 수 있지만, -(2^53 − 1) ([`Number.MIN_SAFE_INTEGER`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Number/MIN_SAFE_INTEGER)) 와 2^53 − 1 ([`Number.MAX_SAFE_INTEGER`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER)) 범위의 정수만 안전하게 저장할 수 있습니다.
>
>[`Number.MIN_VALUE`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Number/MIN_VALUE)보다 작은 양수값은 `+0`으로 변환됩니다.
>
>[`Number.MIN_VALUE`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Number/MIN_VALUE)보다 큰 음수값은 `-0`으로 변환됩니다.

[MDN-number 타입](https://developer.mozilla.org/ko/docs/Web/JavaScript/Data_structures#number_%ED%83%80%EC%9E%85) 문서에서 발췌한 내용입니다.

 `+0`,`-0`  은 2^-1074 값보다 작거나 큰 양수 값이라는 것을 알 수 있습니다.

표현하기에는 너무 작아서 `+0`,`-0` 으로 표현하는 것 같습니다. (미적분?!?!)



조금만 더 들어가서 `Number.MIN_VALUE` 는 어떤 값일까요?

> `MIN_VALUE` 속성은 JavaScript에서 표현할 수 있는, 0에 가장 가깝지만 음수는 아닌 수입니다.
>
> `MIN_VALUE`의 값은 약 `5e-324`입니다. `MIN_VALUE`보다 작은 값("언더플로우 값")은 0으로 변환됩니다.
>
> `MIN_VALUE`는 [`Number`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Number)의 정적 속성이기 때문에, 직접 생성한 [`Number`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Number) 객체의 속성이 아니라 `Number.MIN_VALUE` 형식으로 사용해야 합니다.

[MDN-number-min_value](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Number/MIN_VALUE) 문서에서 발췌한 내용입니다.

그렇습니다.

`+0𝔽, -0𝔽` 는 무엇을 뜻하는 것일까? 라는 질문은  한 문장으로 결론 지을 수 있습니다.

**"`+0𝔽, -0𝔽`  는  0에 가장 가깝지만 음수는 아닌 수입니다."**



### `Object and argument has an [[IsHTMLDDA]] internal slot` 은 무엇일까?

결론은 **"`[[IsHTMLDDA]]` 내부 슬롯을 가진 객체인  `document.all` 객체는 인덱스(배열과 같은)와 요소의 ID로 액세스할 수 있는 모든 문서 요소의 컬렉션을 반환하는 인터페이스를 반환한다. 하지만 타입 변환 시 `undefined` 로 평가되어 `false`를 반환하며 지원이 중단되어 사용을 지양해야 한다."** 입니다.



[ECMAScript-isHTMLDDA internal slot-Changes to toBoolean](https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot-to-boolean) 의 내용에서 찾아보겠습니다.

> Objects with an [[IsHTMLDDA]] internal slot behave like undefined in the [ToBoolean](https://tc39.es/ecma262/#sec-toboolean) and [IsLooselyEqual](https://tc39.es/ecma262/#sec-islooselyequal) [abstract operations](https://tc39.es/ecma262/#sec-algorithm-conventions-abstract-operations) and when used as an operand for the [`typeof` operator](https://tc39.es/ecma262/#sec-typeof-operator).
>
> [[IsHTMLDDA]] 내부 슬롯이 있는 객체는 ToBoolean 및 IsLooselyEqual(==, 동등 연산자) 추상 연산에서 그리고 typeof 연산자의 피연산자로 사용될 때 undefined 처럼 동작합니다.

**"`[[IsHTMLDDA]] ` 을 내부 슬롯으로 가지고 있는 객체는 `undefined` 로 평가된다."**는 내용입니다.



그렇다면 `[[IsHTMLDDA]] ` 을 내부 슬롯으로 가지고 있는 객체는 무엇일까요?

> Objects with an [[IsHTMLDDA]] internal slot are never created by this specification.
>
> However, the [`document.all` object](https://html.spec.whatwg.org/multipage/obsolete.html#dom-document-all) in web browsers is a [host-defined](https://tc39.es/ecma262/#host-defined) [exotic object](https://tc39.es/ecma262/#exotic-object) with this slot that exists for web compatibility purposes.
>
> There are no other known examples of this type of object and implementations should not create any with the exception of `document.all`.
>
> [[IsHTMLDDA]] 내부 슬롯이 있는 객체는 이 사양에 의해 생성되지 않습니다.
>
> 그러나 웹 브라우저의 document.all 개체는 웹 호환성을 위해 존재하는 이 슬롯이 있는 호스트 정의 이국적인 개체입니다. 
>
> 이 유형의 객체에 대해 알려진 다른 예는 없으며 구현에서는 document.all을 제외하고는 어떤 것도 생성해서는 안 됩니다.

 `[[IsHTMLDDA]] ` 을 내부 슬롯으로 가지고 있는 객체는 `document.all` 이라는 객체라는 것을 알 수 있습니다.



`document.all` 이라는 객체는 무엇일까요?

> [`Document`](https://developer.mozilla.org/ko/docs/Web/API/Document) 읽기전용 인터페이스인 **`all`** 속성은 문서 노드에 위치한[`HTMLAllCollection` (en-US)](https://developer.mozilla.org/en-US/docs/Web/API/HTMLAllCollection) 반환합니다.
>
> 문서순서상의 문서의 모든 요소 [`HTMLAllCollection` (en-US)](https://developer.mozilla.org/en-US/docs/Web/API/HTMLAllCollection)를 리턴하는 `document.all` 대신, 문서순서상의 문서의 모든 요소 [`NodeList`](https://developer.mozilla.org/ko/docs/Web/API/NodeList)를 리턴하는 [`Document.querySelectorAll`](https://developer.mozilla.org/ko/docs/Web/API/Document/querySelectorAll)를 사용 할 수 있습니다.
>
> [`HTMLAllCollection` (en-US)](https://developer.mozilla.org/en-US/docs/Web/API/HTMLAllCollection)는 문서 내에서 모든 요소를 담고 있다.

[MDN-document all](https://developer.mozilla.org/ko/docs/Web/API/Document/all) 문서에서 발췌하였습니다.

`document.all`은 `HTMLAllCollection`을 반환하며 `HTMLAllCollection`은 문서 내의 모든 요소를 담고 있는 것입니다.

하지만 **"`document.all` 속성은 지원이 중단되었기 때문에 지양해야 합니다."** (`Document.querySelectorAll` 사용을 권장합니다.)



`HTMLAllCollection` 은 무엇일까요?

> he **`HTMLAllCollection`** interface represents a collection of *all* of the document's elements, accessible by index (like an array) and by the element's [`id`](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id). It is returned by the [`document.all`](https://developer.mozilla.org/en-US/docs/Web/API/Document/all) property.
>
> `HTMLAllCollection` has a very similar shape to [`HTMLCollection`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCollection), but there are many subtle behavior differences — for example, `HTMLAllCollection` can be called as a function, and its `item()` method can be called with a string representing an element's `id` or `name` attribute.
>
> HTMLAllCollection 인터페이스는 인덱스(배열과 같은)와 요소의 ID로 액세스할 수 있는 모든 문서 요소의 컬렉션을 나타냅니다. document.all 속성에 의해 반환됩니다.
>
> HTMLAllCollection은 HTMLCollection과 모양이 매우 유사하지만 미묘한 동작 차이가 많이 있습니다. 예를 들어 HTMLAllCollection은 함수로 호출할 수 있고 해당 item() 메서드는 요소의 ID 또는 이름 속성을 나타내는 문자열을 사용하여 호출할 수 있습니다.

[MDN-HTMLAllCollection](https://developer.mozilla.org/en-US/docs/Web/API/HTMLAllCollection) 문서에서 발췌하였습니다.

`HTMLAllCollection` 은 인터페이스이며 인덱스(배열과 같은)와 요소의 ID로 액세스할 수 있는 모든 문서 요소의 컬렉션을 나타냅니다.

따라서 **"`document.all` 은 인덱스(배열과 같은)와 요소의 ID로 액세스할 수 있는 모든 문서 요소의 컬렉션을 반환하는 인터페이스"** 입니다. 



