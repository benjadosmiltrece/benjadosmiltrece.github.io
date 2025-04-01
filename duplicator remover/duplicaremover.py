# Read the file and remove duplicates
with open("input.txt", "r") as file:
    words = file.read().split()  # Read the content and split into words

# Remove duplicates while maintaining order
unique_words = list(dict.fromkeys(words))

# Save the unique words to a new file or overwrite the old one
with open("output.txt", "w") as file:
    file.write(" ".join(unique_words))
