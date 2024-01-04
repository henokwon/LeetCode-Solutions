import random

class RandomizedSet:
    def __init__(self):
        self.val_to_index = {}  # Dictionary to store values and their indices
        self.values = []       # List to store values

    def insert(self, val):
        if val in self.val_to_index:
            return False

        self.val_to_index[val] = len(self.values)
        self.values.append(val)

        return True

    def remove(self, val):
        if val not in self.val_to_index:
            return False

        index = self.val_to_index[val]
        last_val = self.values.pop()

        if val != last_val:
            self.values[index] = last_val
            self.val_to_index[last_val] = index

        del self.val_to_index[val]

        return True

    def getRandom(self):
        if self.values:
            random_index = random.randint(0, len(self.values) - 1)
            return self.values[random_index]
