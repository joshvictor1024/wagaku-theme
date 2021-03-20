#include <vector>
#define ADD(x, y) ((x) + (y))

namespace MyNamespace
{
    
enum MyEnum { ZERO = 0, ONE, TWO };

class MyClass
{
    int id;
    int array[1];
    int* pointer;
    std::vector<int> data; // known issue: "<" ">" are mistaken as comparison operators, rather than punctuation

    MyClass(int id) : id(id) {}
    MyClass& operator=(MyClass rhs) { return *this; }
    void operatorTest(MyClass other) {
        int a;
        a = 1;
        MyClass x(66);
        x = other;
    }
    void setArray(MyEnum e = MyEnum::ZERO) {
        array[0] = static_cast<int>(e) + 1;
    }
    bool pointerTest() {
        pointer = new int(42);
        delete pointer;
        pointer = new int[5];
        delete[] pointer;
        return pointer == nullptr;
    }
};

} // namespace MyNamespace

[[nodiscard]] int myFunction(MyNamespace::MyEnum e) {
    alignas(long long) int a = alignof(int);
    int b = sizeof(char);
    int c = ADD(1, 2);
    char s[] = "hello world.";
    struct alignas(16) MyStruct {}; // known issue: "alignas" and "(" are counted as 1 token
    return int(e);
}

int main() {
    return 0;
}
