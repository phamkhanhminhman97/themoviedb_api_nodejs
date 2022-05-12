## Priority list on sql query
* FROM clause
* WHERE clause
* GROUP BY clause
* HAVING clause
* SELECT clause
* DISTINCT clause
* ORDER BY clause
* LIMIT clause 

## BASIC QUERY
* SELECT	
* Column alias
	+ AS keyword là optional
	+ Sử dụng(“) khi alias chứa khoảng trắng
* ORDER BY
	+ Mặc định là ASC
	+ Use NULLS FIRST and NULLS LAST options to explicitly specify the order of NULL with other non-null values
* DISTINCT
	+ provide you with a clause that removes duplicate rows in the result set
* GROUP BY
	+ Tổng hợp các bản ghi thành các nhóm
* HAVING
 	+ Không thể dùng alias để tham chiếu đã được chỉ định ở mệnh để SELECT
 	`SELECT
    ...
    aggregate_function (column_name3) column_alias
	FROM
    ...
	GROUP BY
    ...
	HAVING
    column_alias > value;` //wrong

## Table Relation
* INNER JOIN trả về các hàng khi có ít nhất 1 giá trị ở cả 2 bảng
* LEFT JOIN trả về tất cả các hàng ở bảng bên trái và các điều kiện đúng ở bảng bên phải (không thoã thì NULL)
* RIGHT JOIN trả về tất cả các hàng ở bảng bên phải và các điều kiện đúng ở bảng bên trái (không thoã thì NULL)
* FULL JOIN trả về là tập hợp tất cả dữ liệu chung và riêng giữa thông qua điều kiện kết hợp hai bảng.

