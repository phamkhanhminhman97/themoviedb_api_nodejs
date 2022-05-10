

## Basic Type
 
* *Built-in types – Kiểu dữ liệu được định nghĩa sẵn
    ``number``, ``string``, ``boolean``, ``symbol``, ``void``, ``null``, ``undefined``.
* *User-defined types – Kiểu dữ liệu do người dùng xác định*
    ``enum``, ``class``, ``interface``, ``array``, ``tuple``.
## Any Type
   * Khi muốn lưu một biến mà không biết kiểu của  biến đó *
   * `let person: any = "Foo"`;
## Void
*   hàm sẽ không trả về giá trị gì.
* chỉ có thể gán null và undefined cho void
## Type annotation - Kiểu chú thích
  * Gán một kiểu cho một giá trị rõ ràng*
  * `let with : number = 1080; `*
## Type inference- Kiểu suy luận

*   Nếu khai báo dữ liệu cho một biến mà  không khai báo kiểu dữ liệu thì  TS  sẽ tự suy luận*
*    `let height = 1920`

## Interface
*  Định nghĩa các phương thức và thuộc tính mà các class implement
*  Khai báo kiểu cho các object
*  So với type alias thì nó cho phép kế thừa interface khác 
` interface { name: string, age:number
	}`
## Type Alias
*    Cho phép đặt lại tên cho một kiểu dữ liệu
 ` type alphanumberic = number`| string
 > //bad
 `let teacher: {name: string, age:number}`
 `let student: {name: string, age:number}`
 > //good
 `type Person = {name: string, age: number}`
 `let teacher : Person`
 `let student: Person`
 * Giúp giảm trùng lặp và tái sử dụng các kiểu dữ liệu một cách thống nhất
## Union Type
*    Một biến có thể kết hợp nhiều kiểu dữ liệu với nhau
## Intersection Type
*    kết hợp nhiều kiểu dữ liệu, kiểu mới có tất cả tính năng của các kiểu hiện có
` let id : string & number` 
## Array
* Là một kiểu dữ liệu đặc biệt được sử dụng để lưu trữ nhiều giá trị của nhiều kiểu dữ liệu khác nhau.
` let a = ['foo', 'bar' ,1, 2]`
` let  b : string[] = ['foo' ,'bar']`
## Tuple
* Là một array đã được cố định size cũng như khai báo kiểu của các phần tử của nó.
* Có thể khai báo chứa bao nhiêu kiểu và phần tử tuỳ thích. Tuy nhiên khi sử dụng thì chúng ta phải gán đúng số lượng phần tử và type cũng như thứ tự tương ứng như đã khai báo, nếu không sẽ xảy ra lỗi.

`let a = [string, number] = [ 'a', 1]`
## Enum
*	Cho phép khai báo một tập hợp các biến không đổi (constant).
` enum STATUS { PENDING = 0, ACTIVE = 1}`
## Never 
* Được sử dụng để cho biết các giá trị sẽ không bao giờ xảy ra, không nhận giá trị, ví dụ như cho các hàm không bao giờ dừng, chạy vô hạn hoặc luôn luôn trả về exception
` function  throwMess(err:string): never {
throw  new  Error(err);
}	`

## Different between VOID and NEVER
* **void** vẫn có thể là undefined hoặc null trong khi **never** không nhận bất cứ giá trị nào.
` let a : void;`
` a = null;` `a = undefined`
` let b : never`
` b = null ` //Type 'null' is not assignable to type 'never'

## Null, Undefined
* Tuy nhiên tùy thuộc vào tùy chỉnh `strictNullChecks` trong `tsconfig.json` thế nào mà chúng sẽ hành xử khác nhau
	 - `strictNullChecks: true`: Trình biên dịch TS sẽ báo lỗi nếu bạn không kiểm tra biến có phải  `null`  hay  `undefined`  không.
	- `strictNullChecks: false`: sẽ không check
* **undefined** là khai báo mà chưa gán giá trị type of là undefined
* **null** là giá trị rỗng hoặc không tồn tại type of là object 
## Type Assertion 
* Đây là một cách để thông báo cho compiler biết kiểu của đối tượng mà mình sử dụng. Nói ngắn gọn là ép kiểu cho đối tương.

* Có hai cách để sử dụng Type assertions. Một là sử dụng  **“<>” (angle bracket)** hoặc là **as** syntax
`let sum:  any` 
`let total =  <number>sum` or `let total = sum as number`
`total =  10 total =  "Total"`//Type 'string' is not assignable to type 'number'.
## Anonymous function
* Những hàm chỉ cần sử dụng một lần duy nhất, ví dụ như hàm xử lý event, hàm khai báo config hay hàm callback, thay vì nghĩ ra tên cho chúng, tránh trùng lặp tên các hàm cũ, chúng ta có thể sử dụng anonymous function.
`arr.map((i) => i*2)`

## Class
* Cấu trúc của một class cơ bản gồm có :
	-   Fields
	-   Constructor
	-   Methods
* class con kế thừa từ một class cha, chúng ta sử dụng keyword **extends**
*	phương thức  **super**() là cách mà class con  gọi hàm constructor của class cha và truyền các param vào class cha đó.  
*	Lưu ý:
	 -	**super()** phải luôn được gọi đầu tiên trong constructor của lớp con
	-   mỗi một class chỉ được extends một class duy nhất
* khai báo lại một phương thức (methods) từ class cha, quá trình đó gọi là overriding
* Một method khi override lại từ method cha thì cần có đúng kiểu tên và kiểu trả về như method cha
## Abstract class
* được sinh ra mới mục đích chính là thể hiện tính kế thừa.
* khi khai báo một **class** kế thừa từ **abstract** trên thì cần phải định nghĩa toàn bộ các abstract methods bên trong **abstract class** ấy.
* abstract class có thể kế thừa từ một hoặc nhiều interfaces
## Data modifier
* `public` `private` `protected`, `readonly`(giá trị không được phép thay đổi)
## Static
* Các method hay properties có thể gọi trực tiếp mà không cần thông một instance 
## Keyof
* Lấy ra danh sách các key của dữ liệu nào đó
`interface  Person  { name: string; age: number };`
`type  P = keyof  Person;`
## Typeof
* Toán tử **typeof** trả về một **string** biểu thị kiểu dữ liệu của một giá trị 
## Indexed Access Type
* Truy cập thuộc tính của object bằng cách sử dụng dấu ngoặc vuông [ ]
	- Dùng [] khi tên thuộc tính có khoảng trắng,
	- `a['full name']`
## Conditional Type
* giúp cho chúng ta có thể tạo ra những type theo điều kiện
 `type  Example1 = Dog  extends  Animal ? number : string;`
	  -  Nếu class Dog có kế thừa Animal thì trả về number, ko thì là string
## Generic Type
* là việc truyền type vào function, class, interface, như là 1 tham số.
` interface Student { id: number; name: string }`
` const arr : Array<Student> = [{id:1, name:'bob'}]`
* `function identity(arg: number): number {
    return arg;
}`
      - Hàm này chỉ duy nhất sử dụng kiểu number, có thể dung **any** nhưng khó đoán được kiểu gì sẽ trả về
  `function identity<T>(arg: T): T{  
return arg;  
}`

## unknown
* khi muốn mô tả một dữ liệu mà chưa biết được trước kiểu dữ liệu của nó
* tuy nhiên khác **any** chúng ta có thể truy cập vào thuộc tính mặc dù không tồn tại của nó, **unknown** thì không
## Literal Type 
* Chỉ định một giá trị cụ thể làm kiểu dữ liệu
` let a : 1`
## Optional - Default Parameter
`function  f(x?: number) {
// ...
}
f(); // OK
f(10); // OK`
## Overload
* có nhiều phương thức cùng tên nhưng khác nhau về số lượng tham số hoặc kiểu dữ liệu tham số.
## Mapped Type
## Utility Type
* Partial - Constructs a type with all properties of `Type` set to optional.
* Required - Constructs a type consisting of all properties of `Type` set to required. The opposite of [`Partial`]
* Readonly
* Pick
* Omit
## Decorater
* Class Decorator: được khai báo trước class và nó apply cho constructor của class
* Method-Access-Property-Parameter Decorator: nhận vào 3 param (targer, propertyKey, descriptor)
* Sẽ được gọi khi khởi tại instance
## for - for/in - for/of - forEach
* for, for/in truy cập đến index cần arr[index] để truy cập tới phần tử
* for/of, forEach truy cập đến phần tử 
* for/in lặp qua cả key không phải số
* for/in, forEach bỏ quả phần tử rỗng
* for, for/of thì không bỏ qua phần tử rỗng
* forEach không dùng await
## Template Litertal
* Chèn giá trị của biến vào chuỗi
` let a = 'Test ${variable} `
## Erased type
* Khi compile sang Js thì các type annotation sẽ mất
## Destructuring
* Object `let person = {id:1, name:'abc'}` `const {id,name} = person`
