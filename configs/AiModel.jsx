/*
 * Install the Generative AI SDK
 *
 * $ npm install @google/generative-ai
 */

const {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } = require("@google/generative-ai");
  
  const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "application/json",
  };
  
    export const GenerateCourseLayout_AI = model.startChat({
      generationConfig,
   // safetySettings: Adjust safety settings
   // See https://ai.google.dev/gemini-api/docs/safety-settings
      history: [
        {
          role: "user",
          parts: [
            {text: "Generate A Course Tutorial on following detail with course Name, description, along with Chapter Name, about, duration:, Category:'Programing',Topic:Python, Level: Basic, Duration 1 hours, NoOfChapters:5 , in json format"},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "```json\n{\n  \"course_name\": \"Python Fundamentals for Beginners\",\n  \"description\": \"This beginner-friendly course introduces you to the fundamentals of Python programming. Learn how to write basic Python code, understand data types, variables, operators, control flow, and functions. By the end of this course, you'll be able to build simple Python programs and lay a solid foundation for further exploration in the world of Python programming.\",\n  \"chapters\": [\n    {\n      \"chapter_name\": \"Introduction to Python\",\n      \"about\": \"This chapter provides an overview of Python, its history, applications, and why it's a popular programming language. We'll also cover the basics of setting up your Python development environment.\",\n      \"duration\": \"20 minutes\"\n    },\n    {\n      \"chapter_name\": \"Data Types and Variables\",\n      \"about\": \"Learn about different data types in Python, including integers, floats, strings, and booleans. You'll understand how to declare variables, assign values, and perform basic operations with them.\",\n      \"duration\": \"25 minutes\"\n    },\n    {\n      \"chapter_name\": \"Operators and Expressions\",\n      \"about\": \"Explore various arithmetic, comparison, logical, and bitwise operators in Python. Learn how to build expressions and evaluate them to make decisions in your programs.\",\n      \"duration\": \"15 minutes\"\n    },\n    {\n      \"chapter_name\": \"Control Flow Statements\",\n      \"about\": \"Discover how to control the flow of execution in your Python programs using conditional statements (if-else) and loops (for and while). Learn how to write code that makes decisions and repeats tasks.\",\n      \"duration\": \"20 minutes\"\n    },\n    {\n      \"chapter_name\": \"Functions\",\n      \"about\": \"Understand the concept of functions in Python. Learn how to define, call, and pass arguments to functions to create reusable code blocks and modularize your programs.\",\n      \"duration\": \"10 minutes\"\n    }\n  ],\n  \"category\": \"Programming\",\n  \"topic\": \"Python\",\n  \"level\": \"Basic\",\n  \"duration\": \"1 hour\",\n  \"no_of_chapters\": 5\n}\n```"},
          ],
        },
      ],
    });

    export const GenerateChapterContent_AI = model.startChat({
      generationConfig,
      history: [
        {
          role: "user",
          parts: [
            {text: "\nExplain the concept in detail on Topic: Python Basic, Chapter: Variable in Python, in JSON format with list of array with field as title, explanation on given chapter in detail, Code example(code field in <precode> format) if applicable"},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "```json\n{\n  \"title\": \"Variables in Python\",\n  \"explanation\": \"Variables are used to store data values in Python. A variable is created when you assign a value to it. You can think of variables as containers that hold information. In Python, variables can store different types of data, such as numbers, strings, lists, dictionaries, and more. To create a variable, you need to provide a name for it and assign a value to it using the assignment operator (=). For example, you can create a variable called 'x' and assign the value 10 to it by writing 'x = 10'. After creating a variable, you can use it in your code to perform operations, store results, and manipulate data. Variables in Python are dynamic, which means you don't need to specify the data type when creating a variable. Python automatically determines the data type based on the value assigned to the variable. This flexibility makes Python a versatile and easy-to-use programming language for beginners and experienced developers alike.\",\n  \"code\": \"# Example of creating and using variables in Python\nx = 10\ny = 'Hello, World!'\n\nprint(x)  # Output: 10\nprint(y)  # Output: Hello, World!\"\n}\n```"},
          ],
        }
      ]
    });