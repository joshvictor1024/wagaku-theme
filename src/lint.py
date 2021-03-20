class MyClass:

    def __init__(self, number):
        self._number = number + 1

    @property
    def number(self):
        return self._number

