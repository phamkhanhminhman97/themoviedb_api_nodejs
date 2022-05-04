# BASIC TYPE
 
* *Built-in types – Kiểu dữ liệu được định nghĩa sẵ*```
    ``number``, ``string``, ``boolean``, ``symbol``, ``void``, ``null``, ``undefined``.
* *User-defined types – Kiểu dữ liệu do người dùng xác định*
    ``enum``, ``class``, ``interface``, ``array``, ``tuple``.
# ANY TYPE
   * Khi muốn lưu một biến mà không biết kiểu của  biến đó *
   * `let person: any = "Foo"`;
# VOID
*   Void cho biết sự vắng mặt của kiểu với biến. Nó hoạt động như đối lập với bất kỳ kiểu nào. Nó hữu ích cho các hàm không trả về giá trị.
# TYPE ANNOTATION - Kiểu chú thích
  * Gán một kiểu cho một giá trị rõ raàng*
  * `let with : number = 1080; `*
# TYPE INFERENCE - Kiểu suy luận

*   Nếu khai báo dữ liệu cho một biến mà  không khai báo kiểu dữ liệu thì  TS  sẽ tự suy luận*
*    `let height = 1920`