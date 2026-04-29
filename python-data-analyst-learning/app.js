const modules = [
  makeModule(
    "python-mindset",
    1,
    "Python Mindset",
    "Start with what Python is, how analysts use it, and where code runs.",
    "Foundation",
    [
      makeFact("Python interpreter", "the program that runs Python code", "execute Python statements and test ideas quickly", "run code from a console or script", "print(2 + 3)", "print the value 5", 1),
      makeFact("script", "a saved Python file that runs a sequence of commands", "store repeatable analyst work in one file", "save a cleaning routine in `analysis.py`", "report_name = 'weekly'\nprint(report_name)", "assign a value and print `weekly`", 1),
      makeFact("notebook", "an interactive document with code, output, and notes", "explore data step by step and explain findings", "work in Jupyter while testing chart ideas", "total = 10\naverage = total / 2\naverage", "show the value 5 in the notebook output", 1),
      makeFact("comment", "text in code that Python ignores", "explain logic without changing the program", "write a note before a merge step", "# clean null rows\nprint('ready')", "ignore the note and print `ready`", 1),
      makeFact("syntax", "the formal rules that tell Python how code must be written", "avoid errors caused by missing punctuation or structure", "close parentheses correctly in a function call", "print('hello'", "raise a syntax error because the parenthesis is not closed", 2),
      makeFact("library", "a package of reusable Python tools", "add capabilities such as data analysis or plotting", "import pandas for table work", "import math\nprint(math.sqrt(16))", "use the math library to print 4.0", 2),
      makeFact("shell", "a command-line place to run Python commands", "test small expressions before adding them to a script", "check a date calculation quickly", "numbers = [2, 4]\nlen(numbers)", "return 2 because the list has two items", 2),
      makeFact("workflow", "an ordered set of steps from raw data to insight", "keep analyst work structured and repeatable", "load, clean, analyze, visualize, then report", "steps = ['load', 'clean', 'analyze']\nsteps[1]", "return `clean` from the workflow list", 3)
    ]
  ),
  makeModule(
    "variables-types",
    2,
    "Variables And Data Types",
    "Learn names, numbers, text, booleans, and the data types analysts use every day.",
    "Foundation",
    [
      makeFact("variable", "a name that stores a value", "reuse information instead of typing it repeatedly", "store total sales in a variable", "sales_total = 2500\nprint(sales_total)", "store 2500 and print it", 1),
      makeFact("integer", "a whole number without decimals", "count rows, items, or whole units", "store the number of customers as 120", "customers = 120\nprint(type(customers).__name__)", "show that the value is an `int`", 1),
      makeFact("float", "a number with a decimal part", "track measures like revenue, rates, or averages", "store conversion rate as 0.42", "rate = 0.42\nprint(type(rate).__name__)", "show that the value is a `float`", 1),
      makeFact("string", "text wrapped in quotes", "work with names, categories, and labels", "store the region name `West`", "region = 'West'\nprint(region.lower())", "convert the text to `west`", 2),
      makeFact("boolean", "a value that is either True or False", "represent yes or no conditions in logic", "flag whether a target was met", "target_met = True\nprint(not target_met)", "flip the value to False", 2),
      makeFact("type conversion", "changing a value from one data type to another", "turn user input or imported text into usable numbers", "convert `'25'` into the number 25", "age_text = '25'\nage = int(age_text)\nprint(age + 5)", "convert the text and print 30", 3),
      makeFact("assignment", "the act of placing a value into a variable with `=`", "update values as a workflow moves forward", "set `clean_rows = 80` after filtering", "rows = 10\nrows = rows + 5\nprint(rows)", "update the variable and print 15", 3),
      makeFact("naming convention", "a clear way to name variables such as `snake_case`", "make analyst code easier to read and maintain", "use `monthly_revenue` instead of `mr`", "monthly_revenue = 5000\nprint(monthly_revenue)", "store a readable variable name and print 5000", 4)
    ]
  ),
  makeModule(
    "strings-cleaning",
    3,
    "Strings And Text Cleaning",
    "Clean messy text, standardize categories, and pull useful pieces from strings.",
    "Foundation",
    [
      makeFact("strip", "a string method that removes extra spaces at the start and end", "clean imported text fields before analysis", "remove blank padding around a customer name", "name = '  Ada  '\nprint(name.strip())", "remove outer spaces and print `Ada`", 1),
      makeFact("lower", "a string method that converts text to lowercase", "standardize categories before matching or grouping", "turn `EAST` and `East` into the same style", "region = 'EAST'\nprint(region.lower())", "print `east`", 1),
      makeFact("replace", "a string method that swaps one piece of text for another", "correct symbols or labels in a column", "replace `-` with `/` in a date string", "date_text = '2026-04-01'\nprint(date_text.replace('-', '/'))", "swap dashes and print `2026/04/01`", 2),
      makeFact("split", "a string method that breaks text into a list using a separator", "separate values like first and last names", "split `North,West` into two labels", "tags = 'North,West'\nprint(tags.split(','))", "create the list `['North', 'West']`", 2),
      makeFact("f-string", "a formatted string that inserts variable values into text", "build readable summaries for reports", "show `Revenue: 5200` from a variable", "revenue = 5200\nprint(f'Revenue: {revenue}')", "insert the variable value into the text", 3),
      makeFact("substring", "a smaller piece taken from a larger string", "extract codes, months, or prefixes from text", "pull the year from `2026-04-01`", "date_text = '2026-04-01'\nprint(date_text[:4])", "take the first four characters and print `2026`", 3),
      makeFact("startswith", "a string check that tests whether text begins with a given pattern", "identify records with a common prefix", "find IDs that start with `VIP`", "customer_id = 'VIP-204'\nprint(customer_id.startswith('VIP'))", "return True because the text starts with `VIP`", 4),
      makeFact("text standardization", "the process of making text values consistent", "reduce duplicates caused by spacing, case, or spelling differences", "standardize city names before grouping data", "city = '  Calgary '\nprint(city.strip().lower())", "clean the text into `calgary`", 4)
    ]
  ),
  makeModule(
    "collections",
    4,
    "Lists Dictionaries And Sets",
    "Store collections of values and choose the right structure for the job.",
    "Foundation",
    [
      makeFact("list", "an ordered collection that can be changed", "store rows, labels, or steps in sequence", "keep monthly sales values in order", "sales = [100, 120, 140]\nprint(sales[0])", "return the first value 100", 1),
      makeFact("append", "a list method that adds one item to the end", "grow a collection during a loop or workflow", "add a new score to a running list", "scores = [80, 85]\nscores.append(90)\nprint(scores)", "add 90 to the end of the list", 1),
      makeFact("dictionary", "a collection of key-value pairs", "match labels such as column names to values", "store `{region: sales}` style information", "summary = {'West': 400}\nprint(summary['West'])", "look up the key and print 400", 2),
      makeFact("keys", "the label side of a dictionary entry", "identify what fields or categories are stored", "inspect which regions are present in a summary", "summary = {'West': 400, 'East': 380}\nprint(list(summary.keys()))", "return the dictionary labels as a list", 2),
      makeFact("set", "an unordered collection of unique values", "remove duplicates quickly", "find unique product categories", "items = {'A', 'B', 'A'}\nprint(len(items))", "keep only unique values so the length is 2", 3),
      makeFact("tuple", "an ordered collection that does not change", "store fixed pairs such as coordinates or dimensions", "keep a row and column position together", "point = (3, 5)\nprint(point[1])", "return the second value 5", 3),
      makeFact("index", "the position number used to access an ordered item", "pull a specific value from a list or tuple", "get the second month from a list", "months = ['Jan', 'Feb', 'Mar']\nprint(months[1])", "return `Feb` because indexing starts at 0", 4),
      makeFact("membership test", "checking whether a value exists in a collection", "filter categories or validate labels", "test whether `West` is in a list of regions", "regions = ['East', 'West']\nprint('West' in regions)", "return True because the value is present", 4)
    ]
  ),
  makeModule(
    "logic",
    5,
    "Conditions And Boolean Logic",
    "Make decisions with `if`, comparisons, and logical operators.",
    "Foundation",
    [
      makeFact("if statement", "a command that runs code only when a condition is true", "make analyst workflows react to data rules", "flag sales above a target", "sales = 120\nif sales > 100:\n    print('target met')", "print `target met` because the condition is true", 1),
      makeFact("comparison operator", "a symbol such as `>`, `<`, or `==` used to compare values", "build filtering and rule checks", "test whether revenue equals a target", "print(5 > 3)", "return True because 5 is greater than 3", 1),
      makeFact("else", "the branch that runs when an `if` condition is false", "handle the alternative case in a workflow", "show `review needed` when a target is not met", "sales = 80\nif sales > 100:\n    print('met')\nelse:\n    print('review needed')", "print `review needed` because the condition is false", 2),
      makeFact("elif", "an extra condition checked after `if` and before `else`", "separate records into more than two categories", "label performance as low, medium, or high", "score = 75\nif score >= 90:\n    print('high')\nelif score >= 70:\n    print('medium')", "print `medium`", 2),
      makeFact("and", "a logical operator that requires both conditions to be true", "create narrow analyst filters", "find rows where sales are high and margin is positive", "sales = 120\nmargin = 10\nprint(sales > 100 and margin > 0)", "return True because both checks pass", 3),
      makeFact("or", "a logical operator that requires at least one condition to be true", "capture rows that meet either of two rules", "keep data from East or West", "region = 'East'\nprint(region == 'East' or region == 'West')", "return True because one condition matches", 3),
      makeFact("not", "a logical operator that reverses a boolean value", "exclude rows or flip checks cleanly", "mark accounts that are not active", "is_active = False\nprint(not is_active)", "return True because the value is reversed", 4),
      makeFact("nested condition", "an `if` placed inside another `if`", "handle multi-step business rules", "check a region first and then check the target", "region = 'West'\nsales = 150\nif region == 'West':\n    if sales > 100:\n        print('focus')", "print `focus` because both nested rules pass", 4)
    ]
  ),
  makeModule(
    "loops",
    6,
    "Loops And Iteration",
    "Repeat tasks across lists, rows, and generated values.",
    "Foundation",
    [
      makeFact("for loop", "a loop that repeats once for each item in a collection", "process every value in a list or column-like structure", "print every month in a list", "months = ['Jan', 'Feb']\nfor month in months:\n    print(month)", "print each month one at a time", 1),
      makeFact("while loop", "a loop that runs while a condition stays true", "repeat until a threshold or stopping rule is reached", "keep asking until data is valid", "count = 0\nwhile count < 2:\n    count += 1\nprint(count)", "keep looping until the value reaches 2", 2),
      makeFact("range", "a function that creates a sequence of numbers for looping", "repeat an action a fixed number of times", "loop through 0 to 4", "for i in range(3):\n    print(i)", "print 0, 1, and 2", 1),
      makeFact("accumulator", "a variable that stores a running total during a loop", "sum values across repeated steps", "total sales across a list", "values = [2, 3, 4]\ntotal = 0\nfor value in values:\n    total += value\nprint(total)", "add all values and print 9", 2),
      makeFact("enumerate", "a function that provides both an index and a value in a loop", "track position while iterating", "number survey responses while printing them", "items = ['A', 'B']\nfor index, item in enumerate(items):\n    print(index, item)", "loop with both the position and the item", 3),
      makeFact("break", "a statement that stops a loop early", "exit once a target row or event is found", "stop when a missing value appears", "for value in [1, 2, 0, 4]:\n    if value == 0:\n        break\nprint(value)", "stop the loop when the value reaches 0", 3),
      makeFact("continue", "a statement that skips the rest of the current loop pass", "ignore unwanted rows without ending the loop", "skip blank category names", "for value in ['A', '', 'B']:\n    if value == '':\n        continue\n    print(value)", "skip the blank string and print the others", 4),
      makeFact("iteration", "one single pass through a loop", "reason about repeated analyst steps more clearly", "one trip through a list of transactions", "values = [10, 20]\nfor value in values:\n    print(value * 2)", "perform the same action during each pass", 4)
    ]
  ),
  makeModule(
    "functions",
    7,
    "Functions",
    "Package logic into reusable blocks with inputs and outputs.",
    "Foundation",
    [
      makeFact("function", "a named block of reusable code", "avoid repeating logic across analyst tasks", "create one cleaner for multiple text fields", "def greet():\n    print('hello')\ngreet()", "define a function and then run it", 1),
      makeFact("parameter", "a variable listed in a function definition", "let a function work with different inputs", "pass different region names into one formatter", "def greet(name):\n    print(name)\ngreet('Ada')", "send `Ada` into the function parameter", 1),
      makeFact("return value", "the result a function sends back with `return`", "capture output for later analysis steps", "return a cleaned value instead of only printing it", "def double(x):\n    return x * 2\nprint(double(4))", "send back 8 and print it", 2),
      makeFact("argument", "the actual value passed into a function call", "run the same logic with different data", "call a discount function with 15", "def square(x):\n    return x * x\nprint(square(3))", "pass 3 as the argument and print 9", 2),
      makeFact("default parameter", "a parameter with a preset value used when no argument is supplied", "make functions flexible without extra typing", "default the chart title to `Summary`", "def label(title='Summary'):\n    return title\nprint(label())", "use the default value `Summary`", 3),
      makeFact("docstring", "a short string placed inside a function to explain what it does", "document analyst utilities for future reuse", "describe a function that removes outliers", "def clean_text(value):\n    'Standardize spacing and case'\n    return value.strip().lower()", "store documentation inside the function", 3),
      makeFact("scope", "the part of a program where a variable is available", "avoid accidentally using the wrong variable", "keep a helper variable inside a function only", "def example():\n    local_value = 5\n    return local_value", "create a variable that only exists inside the function", 4),
      makeFact("modular code", "code split into small focused functions", "make analyst projects easier to test and maintain", "use one function to load data and another to chart it", "def clean(values):\n    return [value.strip() for value in values]\nprint(clean([' A ', 'B ']))", "run a focused cleaning function on each value", 4)
    ]
  ),
  makeModule(
    "files-csv",
    8,
    "Files And CSV Basics",
    "Read and write files so Python can work with stored data.",
    "Foundation",
    [
      makeFact("file path", "the location of a file on a computer", "tell Python which file to open", "point to `data/sales.csv`", "path = 'data/sales.csv'\nprint(path.endswith('.csv'))", "confirm that the path points to a CSV file", 1),
      makeFact("open", "a built-in function that opens a file", "read or write file contents", "open a text report before reading it", "with open('notes.txt', 'w') as file:\n    file.write('ready')", "open a file for writing and save text into it", 2),
      makeFact("read mode", "the file mode `'r'` used to read existing data", "inspect a saved file without changing it", "read a previously exported report", "mode = 'r'\nprint(mode == 'r')", "show that read mode is selected", 2),
      makeFact("write mode", "the file mode `'w'` used to create or replace file contents", "save a fresh report output", "write a summary text file", "mode = 'w'\nprint(mode == 'w')", "show that write mode is selected", 2),
      makeFact("context manager", "the `with` pattern that automatically closes a file after use", "handle files safely without manual closing", "read a file and close it automatically", "with open('sample.txt', 'w') as file:\n    file.write('done')", "open the file safely and close it after the block", 3),
      makeFact("csv module", "Python's built-in tool for working with comma-separated files", "read simple CSV data without pandas", "loop through rows in a raw export", "import csv\nprint(hasattr(csv, 'reader'))", "show that the csv module provides a reader tool", 3),
      makeFact("header row", "the first CSV row that names the columns", "identify what each data field means", "use headers like `date`, `region`, and `sales`", "headers = ['date', 'region', 'sales']\nprint(headers[2])", "return the column name `sales`", 4),
      makeFact("delimiter", "the character that separates values in a text file", "parse data correctly when files use commas, tabs, or pipes", "split a pipe-delimited export", "line = 'A|B|C'\nprint(line.split('|'))", "separate the text into three values", 4)
    ]
  ),
  makeModule(
    "debugging",
    9,
    "Errors And Debugging",
    "Read errors, inspect values, and fix logic problems with confidence.",
    "Foundation",
    [
      makeFact("syntax error", "an error caused by code that breaks Python's writing rules", "fix code that cannot run at all", "spot a missing parenthesis", "print('hello'", "stop because the code is not written correctly", 1),
      makeFact("type error", "an error caused by using an operation with incompatible data types", "correct invalid mixes of text and numbers", "trying to add a string directly to an integer", "value = '5'\n# value + 2", "fail until the text is converted into a number", 2),
      makeFact("name error", "an error caused by using a variable that does not exist", "catch misspelled variable names", "typing `totla` instead of `total`", "total = 10\n# print(totla)", "fail because the misspelled variable name was never defined", 2),
      makeFact("traceback", "the error report that shows where Python stopped", "locate the line and kind of failure quickly", "read the file and line number in an error message", "def divide(a, b):\n    return a / b\n# divide(5, 0)", "show a traceback when division by zero happens", 3),
      makeFact("print debugging", "temporarily printing variable values to inspect program state", "check whether data changes as expected", "print a row count after filtering", "value = 4\nprint('value is', value)", "display the variable so you can inspect it", 3),
      makeFact("try except", "a pattern that catches an error and handles it gracefully", "keep workflows running when a risky step fails", "catch a bad numeric conversion", "try:\n    int('A')\nexcept ValueError:\n    print('bad input')", "catch the conversion problem and print `bad input`", 4),
      makeFact("ValueError", "an error raised when a function gets the right type but a bad value", "handle invalid content such as text in a numeric field", "trying to convert `A12` into an integer", "try:\n    int('A12')\nexcept ValueError:\n    print('invalid number')", "catch the invalid value and print a message", 4),
      makeFact("stepwise testing", "checking code in small pieces instead of all at once", "find the exact step where a workflow breaks", "test file loading before chart building", "numbers = [1, 2, 3]\nprint(sum(numbers))", "verify one small step before moving on", 4)
    ]
  ),
  makeModule(
    "numpy",
    10,
    "NumPy Essentials",
    "Work with numeric arrays for faster computation and vectorized analysis.",
    "Core Analysis",
    [
      makeFact("NumPy array", "a fast multidimensional structure for numeric data", "perform calculations across many values efficiently", "store a column of sales numbers", "import numpy as np\narr = np.array([1, 2, 3])\nprint(arr.mean())", "create an array and compute the mean value 2.0", 1),
      makeFact("vectorization", "performing one operation across many values at once", "avoid slow manual loops for numeric tasks", "add 10 to every number in a series", "import numpy as np\narr = np.array([1, 2, 3])\nprint(arr + 10)", "add 10 to every value in the array", 2),
      makeFact("shape", "the dimensions of an array", "understand whether data is one-dimensional or tabular", "check if an array has rows and columns", "import numpy as np\nmatrix = np.array([[1, 2], [3, 4]])\nprint(matrix.shape)", "return `(2, 2)` for two rows and two columns", 2),
      makeFact("mean", "the arithmetic average of numeric values", "summarize a measure with one central value", "average daily sales", "import numpy as np\narr = np.array([2, 4, 6])\nprint(arr.mean())", "compute the average and print 4.0", 2),
      makeFact("boolean masking", "selecting array values with True or False conditions", "filter numeric data efficiently", "keep only values above a threshold", "import numpy as np\narr = np.array([2, 8, 3])\nprint(arr[arr > 3])", "return only the values greater than 3", 3),
      makeFact("reshape", "changing an array into a new set of dimensions", "prepare data for matrix-style analysis", "turn six values into a 2 by 3 table", "import numpy as np\narr = np.array([1, 2, 3, 4])\nprint(arr.reshape(2, 2).shape)", "restructure the array into two rows and two columns", 3),
      makeFact("nan", "a special missing numeric value in NumPy", "represent gaps in numeric data", "mark a missing measure in a calculation array", "import numpy as np\narr = np.array([1, np.nan, 3])\nprint(np.isnan(arr[1]))", "confirm that the second value is missing", 4),
      makeFact("axis", "the direction along which a calculation is performed", "summarize by rows or columns in a matrix", "sum each column separately", "import numpy as np\nmatrix = np.array([[1, 2], [3, 4]])\nprint(matrix.sum(axis=0))", "sum down the columns to produce `[4 6]`", 4)
    ]
  ),
  makeModule(
    "pandas-foundations",
    11,
    "Pandas Foundations",
    "Load, inspect, and understand tabular data with pandas.",
    "Core Analysis",
    [
      makeFact("DataFrame", "the main pandas table structure with rows and columns", "analyze spreadsheet-like data in Python", "store sales records as a table", "import pandas as pd\ndf = pd.DataFrame({'sales': [100, 150]})\nprint(df['sales'].sum())", "create a DataFrame and sum the sales column", 1),
      makeFact("Series", "a single labeled column in pandas", "work with one variable at a time", "select the `sales` column from a DataFrame", "import pandas as pd\ns = pd.Series([1, 2, 3])\nprint(s.mean())", "create a Series and compute its mean", 1),
      makeFact("read_csv", "a pandas function that loads a CSV file into a DataFrame", "start analysis by bringing stored data into Python", "load `sales.csv` into pandas", "import pandas as pd\n# pd.read_csv('sales.csv')", "read a CSV file and return a DataFrame", 2),
      makeFact("head", "a pandas method that shows the first few rows", "inspect whether data loaded correctly", "peek at the first five records", "import pandas as pd\ndf = pd.DataFrame({'x': [1, 2, 3]})\nprint(df.head(2).shape[0])", "show the first two rows", 2),
      makeFact("columns", "the labels that name DataFrame fields", "check what variables are available", "list the dataset column names", "import pandas as pd\ndf = pd.DataFrame({'sales': [1], 'region': ['West']})\nprint(list(df.columns))", "return the column labels", 3),
      makeFact("dtypes", "the data types of each pandas column", "spot columns imported as the wrong kind of data", "check whether `sales` came in as text", "import pandas as pd\ndf = pd.DataFrame({'sales': [1], 'region': ['West']})\nprint('sales' in df.dtypes.index)", "confirm that pandas tracks each column type", 3),
      makeFact("describe", "a pandas summary method for numeric columns", "review count, mean, and spread quickly", "check the average and range of sales", "import pandas as pd\ndf = pd.DataFrame({'sales': [10, 20, 30]})\nprint('mean' in df.describe().index)", "show that descriptive statistics include the mean row", 4),
      makeFact("index", "the row labels in a pandas object", "track row identity during analysis", "use default row numbers or custom labels", "import pandas as pd\ndf = pd.DataFrame({'sales': [10, 20]})\nprint(df.index.start)", "show that the default index starts at 0", 4)
    ]
  ),
  makeModule(
    "pandas-cleaning",
    12,
    "Data Cleaning In Pandas",
    "Handle missing values, duplicates, conversions, and messy columns.",
    "Core Analysis",
    [
      makeFact("isna", "a pandas method that identifies missing values", "find where data is blank or null", "count missing entries in a column", "import pandas as pd\ndf = pd.DataFrame({'sales': [10, None]})\nprint(df['sales'].isna().sum())", "count one missing value", 1),
      makeFact("dropna", "a pandas method that removes rows or columns with missing values", "clean out incomplete records when appropriate", "drop rows where a key field is blank", "import pandas as pd\ndf = pd.DataFrame({'sales': [10, None]})\nprint(df.dropna().shape[0])", "remove the incomplete row and keep one row", 2),
      makeFact("fillna", "a pandas method that replaces missing values", "impute blanks with defaults or calculated values", "fill missing discount values with 0", "import pandas as pd\ndf = pd.DataFrame({'discount': [None, 5]})\nprint(df['discount'].fillna(0).tolist())", "replace the missing value with 0", 2),
      makeFact("astype", "a pandas method that converts a column to a new data type", "turn text numbers into actual numeric values", "convert a sales column from text to integer", "import pandas as pd\ndf = pd.DataFrame({'sales': ['10', '20']})\nprint(df['sales'].astype(int).sum())", "convert the text values and sum them to 30", 3),
      makeFact("drop_duplicates", "a pandas method that removes repeated rows", "prevent duplicate records from distorting results", "keep one copy of each transaction", "import pandas as pd\ndf = pd.DataFrame({'id': [1, 1, 2]})\nprint(df.drop_duplicates().shape[0])", "remove the repeated row and keep two unique rows", 3),
      makeFact("rename", "a pandas method that changes column names", "standardize inconsistent headers", "rename `Sales Amount` to `sales_amount`", "import pandas as pd\ndf = pd.DataFrame({'Sales Amount': [10]})\nprint('sales_amount' in df.rename(columns={'Sales Amount': 'sales_amount'}).columns)", "rename the column to a cleaner label", 4),
      makeFact("to_datetime", "a pandas function that converts text into dates", "prepare date columns for time analysis", "turn `2026-04-01` text into a real date", "import pandas as pd\ns = pd.to_datetime(pd.Series(['2026-04-01']))\nprint(str(s.dt.year.iloc[0]))", "convert the text and extract the year 2026", 4),
      makeFact("str accessor", "pandas string tools accessed with `.str`", "clean entire text columns at once", "lowercase every value in a region column", "import pandas as pd\ns = pd.Series(['EAST', 'West'])\nprint(s.str.lower().tolist())", "apply string cleaning across the whole column", 4)
    ]
  ),
  makeModule(
    "analysis-groupby",
    13,
    "Filtering Grouping And Aggregation",
    "Slice data, summarize groups, and answer business questions.",
    "Analysis",
    [
      makeFact("boolean filtering", "selecting rows that satisfy a condition", "focus analysis on the records that matter", "keep only sales above 100", "import pandas as pd\ndf = pd.DataFrame({'sales': [80, 120]})\nprint(df[df['sales'] > 100].shape[0])", "keep the one row where sales are above 100", 1),
      makeFact("loc", "a pandas indexer for selecting rows and columns by labels and conditions", "pull a precise slice of a DataFrame", "select the sales column for West region only", "import pandas as pd\ndf = pd.DataFrame({'region': ['West', 'East'], 'sales': [100, 80]})\nprint(df.loc[df['region'] == 'West', 'sales'].iloc[0])", "filter by region and return the West sales value", 2),
      makeFact("groupby", "a pandas method that splits data into groups before summarizing", "compare totals or averages by category", "sum sales by region", "import pandas as pd\ndf = pd.DataFrame({'region': ['West', 'West', 'East'], 'sales': [10, 20, 5]})\nprint(df.groupby('region')['sales'].sum().loc['West'])", "group by region and total the West sales to 30", 2),
      makeFact("aggregation", "reducing many values into a summary such as sum or mean", "turn detail rows into business metrics", "calculate total revenue by month", "import pandas as pd\ndf = pd.DataFrame({'sales': [10, 20, 30]})\nprint(df['sales'].sum())", "aggregate the rows into a total of 60", 3),
      makeFact("sort_values", "a pandas method that orders rows by one or more columns", "rank top products or lowest performers", "sort sales from highest to lowest", "import pandas as pd\ndf = pd.DataFrame({'sales': [10, 30, 20]})\nprint(df.sort_values('sales', ascending=False).iloc[0, 0])", "put the highest sales value first", 3),
      makeFact("value_counts", "a pandas method that counts how often each value appears", "measure category frequency quickly", "count how many times each region appears", "import pandas as pd\ns = pd.Series(['West', 'East', 'West'])\nprint(s.value_counts().loc['West'])", "count two occurrences of `West`", 4),
      makeFact("multiple aggregation", "using more than one summary metric at once", "compare totals, averages, and counts together", "see both mean and sum for a measure", "import pandas as pd\ndf = pd.DataFrame({'sales': [10, 20, 30]})\nresult = df.agg({'sales': ['sum', 'mean']})\nprint('sum' in result.index and 'mean' in result.index)", "return multiple summary statistics in one step", 4),
      makeFact("business question framing", "turning a vague problem into a measurable data question", "guide the right filter, group, and metric choices", "ask which region had the highest quarterly sales", "question = 'Which region had the highest quarterly sales?'\nprint('region' in question.lower())", "focus the analysis on a clear dimension and metric", 4)
    ]
  ),
  makeModule(
    "merge-reshape",
    14,
    "Merging And Reshaping Data",
    "Combine tables and change layout when one table is not enough.",
    "Analysis",
    [
      makeFact("merge", "a pandas method that combines tables using matching keys", "bring related data together for analysis", "join sales records to a product lookup table", "import pandas as pd\nleft = pd.DataFrame({'id': [1], 'sales': [100]})\nright = pd.DataFrame({'id': [1], 'name': ['A']})\nprint(pd.merge(left, right, on='id').shape[1])", "join the tables and produce three columns", 1),
      makeFact("key", "the column used to match rows across tables", "connect records from separate sources correctly", "use `customer_id` in both tables", "left_key = 'customer_id'\nprint(left_key.endswith('_id'))", "use a shared identifier for joining tables", 1),
      makeFact("left join", "a merge that keeps every row from the left table", "preserve the main dataset while adding matches from another", "keep all transactions even if some products are missing from the lookup", "join_type = 'left'\nprint(join_type == 'left')", "keep all rows from the main left table", 2),
      makeFact("inner join", "a merge that keeps only rows with matches in both tables", "analyze only records that connect cleanly", "keep customers that exist in both systems", "join_type = 'inner'\nprint(join_type == 'inner')", "keep only matched rows from both tables", 2),
      makeFact("concat", "a pandas function that stacks tables together", "combine monthly files with the same columns", "append January and February exports", "import pandas as pd\na = pd.DataFrame({'sales': [10]})\nb = pd.DataFrame({'sales': [20]})\nprint(pd.concat([a, b]).shape[0])", "stack the tables and create two rows", 3),
      makeFact("pivot table", "a summary table that reorganizes data by rows, columns, and values", "compare measures across categories in a matrix", "show sales by region and month", "import pandas as pd\ndf = pd.DataFrame({'region': ['West'], 'month': ['Jan'], 'sales': [10]})\nprint(pd.pivot_table(df, values='sales', index='region', columns='month').loc['West', 'Jan'])", "reshape the data into a matrix and return 10", 3),
      makeFact("melt", "a pandas function that turns wide columns into long row values", "prepare data for plotting or tidy analysis", "change Jan, Feb, Mar columns into one month column", "import pandas as pd\ndf = pd.DataFrame({'id': [1], 'Jan': [10], 'Feb': [12]})\nprint(pd.melt(df, id_vars='id').shape[0])", "unpivot the month columns into two rows", 4),
      makeFact("join validation", "checking whether a merge created the expected number of rows and matches", "prevent silent duplication or dropped data", "compare row counts before and after a merge", "before_rows = 100\nafter_rows = 100\nprint(before_rows == after_rows)", "verify whether the join changed row volume unexpectedly", 4)
    ]
  ),
  makeModule(
    "visualization",
    15,
    "Visualization With Matplotlib And Seaborn",
    "Communicate findings with charts that match the question.",
    "Analysis",
    [
      makeFact("line chart", "a chart that shows change over time", "track trends such as monthly revenue", "plot sales by month", "months = ['Jan', 'Feb', 'Mar']\nvalues = [10, 12, 15]\nprint(len(months) == len(values))", "prepare equal-length x and y values for a line chart", 1),
      makeFact("bar chart", "a chart that compares categories", "compare sales by region or product", "show revenue for East, West, and North", "categories = ['East', 'West']\nvalues = [10, 12]\nprint(len(categories))", "prepare category labels for comparison bars", 1),
      makeFact("histogram", "a chart that shows the distribution of numeric values", "inspect spread, skew, or common ranges", "plot order values to see where they cluster", "values = [10, 12, 12, 15]\nprint(min(values), max(values))", "review the range before plotting a distribution", 2),
      makeFact("scatter plot", "a chart that compares two numeric variables point by point", "look for relationships or patterns between measures", "compare advertising spend with sales", "x = [1, 2, 3]\ny = [2, 4, 6]\nprint(len(x) == len(y))", "pair two equal-length numeric series for a scatter plot", 2),
      makeFact("xlabel", "the label placed on the horizontal axis", "help viewers understand what the x-axis represents", "name the axis `Month` on a trend chart", "label = 'Month'\nprint(label.lower())", "prepare a readable axis label", 3),
      makeFact("title", "the main text at the top of a chart", "state the story or business question clearly", "add `Quarterly Sales By Region` above a plot", "chart_title = 'Quarterly Sales By Region'\nprint('Sales' in chart_title)", "use a title that tells the reader what the chart shows", 3),
      makeFact("seaborn", "a higher-level plotting library built on matplotlib", "create attractive statistical charts quickly", "use `sns.barplot` for category comparison", "library_name = 'seaborn'\nprint(library_name.startswith('sea'))", "use seaborn for cleaner chart defaults", 4),
      makeFact("chart selection", "choosing the chart type that best matches the question and data", "avoid misleading or confusing visuals", "use a line chart for time and a bar chart for categories", "question = 'How did revenue change each month?'\nprint('month' in question.lower())", "match the chart type to the analytical question", 4)
    ]
  ),
  makeModule(
    "stats",
    16,
    "Statistics For Analysts",
    "Use basic statistical thinking to summarize and interpret data responsibly.",
    "Analysis",
    [
      makeFact("mean", "the arithmetic average of a set of values", "describe the center of numeric data", "average order value", "values = [10, 20, 30]\nprint(sum(values) / len(values))", "compute the average value 20", 1),
      makeFact("median", "the middle value when data is sorted", "summarize center without being pulled strongly by outliers", "find the middle order size", "values = [10, 20, 100]\nprint(sorted(values)[1])", "pick the middle value 20", 1),
      makeFact("mode", "the most frequent value in a set", "identify the most common category or repeated measure", "find the most common survey answer", "values = ['A', 'B', 'A']\nprint(values.count('A'))", "show that `A` appears most often", 2),
      makeFact("standard deviation", "a measure of how spread out values are from the mean", "compare consistency across groups", "see whether daily sales vary widely", "spread_description = 'high spread means values are far from the mean'\nprint('mean' in spread_description)", "describe variability around the mean", 2),
      makeFact("outlier", "a value that sits far away from most of the data", "spot unusual records that may deserve investigation", "a huge sale far above the usual range", "values = [10, 11, 12, 200]\nprint(max(values))", "identify the unusually large value 200", 3),
      makeFact("sample", "a subset of a larger population", "study part of the data when full collection is costly or unavailable", "survey 500 customers from a larger base", "population = 10000\nsample = 500\nprint(sample < population)", "use a smaller subset drawn from the full population", 3),
      makeFact("correlation", "a measure of how two variables move together", "check whether increases in one measure relate to another", "compare advertising spend and sales", "x = [1, 2, 3]\ny = [2, 4, 6]\nprint(len(x) == len(y))", "prepare paired measures to study relationship", 4),
      makeFact("distribution", "the overall pattern of values in a dataset", "understand shape, spread, and unusual values", "inspect whether response times cluster tightly or broadly", "values = [1, 2, 2, 3, 10]\nprint(len(values))", "review how values are spread across the dataset", 4)
    ]
  ),
  makeModule(
    "sql-python",
    17,
    "SQL And Python Workflow",
    "Combine SQL extraction with Python cleaning and analysis.",
    "Workflow",
    [
      makeFact("SQL query", "a command used to request data from a database", "pull only the data needed for analysis", "select sales records from a transactions table", "query = 'SELECT * FROM sales'\nprint(query.startswith('SELECT'))", "start a query that reads data from a table", 1),
      makeFact("SELECT", "the SQL clause that chooses columns to return", "limit output to relevant fields", "request only `date`, `region`, and `sales`", "query = 'SELECT date, sales FROM orders'\nprint('sales' in query)", "choose specific columns to return", 1),
      makeFact("WHERE", "the SQL clause that filters rows by a condition", "reduce data volume before it reaches Python", "keep only 2026 orders in the extract", "query = 'SELECT * FROM sales WHERE year = 2026'\nprint('WHERE' in query)", "filter rows in the database before loading", 2),
      makeFact("GROUP BY", "the SQL clause that aggregates rows by category", "summarize data before export", "total sales by region inside the database", "query = 'SELECT region, SUM(sales) FROM sales GROUP BY region'\nprint('GROUP BY' in query)", "group records before returning the results", 2),
      makeFact("database connection", "the bridge that lets Python talk to a database", "run queries and collect results programmatically", "connect Python to a reporting warehouse", "connection_state = 'connected'\nprint(connection_state == 'connected')", "establish a working link to the database", 3),
      makeFact("read_sql", "a pandas function that loads SQL query results into a DataFrame", "move database results directly into Python analysis", "run a query and receive a DataFrame", "function_name = 'read_sql'\nprint(function_name.endswith('sql'))", "use pandas to load SQL results into a table", 3),
      makeFact("pushdown filtering", "doing filters and aggregations in SQL before Python", "improve performance and reduce unnecessary data transfer", "filter the last 30 days in SQL instead of after loading everything", "rows_before = 100000\nrows_after = 5000\nprint(rows_after < rows_before)", "reduce the amount of data that Python must process", 4),
      makeFact("hybrid workflow", "using SQL for extraction and Python for cleaning, analysis, or visualization", "play to the strengths of both tools", "query raw sales in SQL and chart the result in Python", "steps = ['SQL extract', 'Python clean', 'Python visualize']\nprint(steps[0])", "start with extraction and continue analysis in Python", 4)
    ]
  ),
  makeModule(
    "apis",
    18,
    "APIs Web Data And Automation",
    "Pull data from the web and automate repeatable analyst reporting.",
    "Workflow",
    [
      makeFact("API", "a service interface that lets one program request data from another", "collect fresh data without manual downloads", "request exchange rates from a web service", "api_term = 'application programming interface'\nprint('interface' in api_term)", "use an interface to request external data", 1),
      makeFact("request", "an action sent to a server asking for data", "retrieve web data programmatically", "ask an endpoint for yesterday's weather", "status_code = 200\nprint(status_code == 200)", "confirm that a successful response was returned", 1),
      makeFact("JSON", "a common text format used to store and exchange structured data", "parse web responses into Python objects", "receive nested fields from an API", "record = {'region': 'West', 'sales': 10}\nprint(record['sales'])", "read a structured value from JSON-like data", 2),
      makeFact("status code", "the response number that tells whether a web request succeeded", "check whether an API call worked before processing data", "look for 200 before loading the payload", "code = 404\nprint(code == 200)", "recognize that 404 is not a successful response", 2),
      makeFact("requests library", "a Python package for sending HTTP requests", "download API data with readable code", "use `requests.get()` to call an endpoint", "library_name = 'requests'\nprint(library_name[0])", "use the requests library for web calls", 3),
      makeFact("response parsing", "turning returned JSON or text into usable Python data", "extract fields needed for analysis", "pull only `date` and `value` from a response", "payload = {'date': '2026-04-01', 'value': 12}\nprint(list(payload.keys())[0])", "inspect and extract fields from a response object", 3),
      makeFact("scheduled reporting", "running a script on a repeating schedule", "refresh dashboards or reports automatically", "send a weekly KPI summary every Monday", "tasks = ['extract', 'clean', 'email']\nprint(tasks[-1])", "finish the automated workflow by delivering the report", 4),
      makeFact("automation pipeline", "a repeatable sequence that loads, transforms, analyzes, and publishes data", "save analyst time and reduce manual mistakes", "refresh a report without hand-editing files", "steps = ['api', 'pandas', 'chart', 'export']\nprint(len(steps))", "run a full repeatable workflow from input to output", 4)
    ]
  )
];

const state = {
  selectedModuleId: modules[0].id,
  selectedLevel: null,
  currentQuestions: [],
  currentIndex: 0,
  score: 0,
  answered: false,
  lastResults: [],
  currentProfileId: null
};

const questionBankCache = new Map();
const profilesStoreKey = "python-analyst-learning-profiles-v1";
const guestStoreKey = "python-analyst-learning-guest-v1";
const profilesStore = loadProfilesStore();
const guestStore = loadGuestStore();

const elements = {
  profileNameLabel: document.getElementById("profile-name-label"),
  profileTrackLabel: document.getElementById("profile-track-label"),
  profileNameInput: document.getElementById("profile-name"),
  profileFocusInput: document.getElementById("profile-focus"),
  profilePasswordInput: document.getElementById("profile-password"),
  createProfileButton: document.getElementById("create-profile-button"),
  loginProfileButton: document.getElementById("login-profile-button"),
  logoutProfileButton: document.getElementById("logout-profile-button"),
  profileMessage: document.getElementById("profile-message"),
  toggleProfilePanelButton: document.getElementById("toggle-profile-panel-button"),
  profilePanelContent: document.getElementById("profile-panel-content"),
  saveStatusLabel: document.getElementById("save-status-label"),
  selectedModuleLabel: document.getElementById("selected-module-label"),
  completedLevelsLabel: document.getElementById("completed-levels-label"),
  completedModulesLabel: document.getElementById("completed-modules-label"),
  roadmapList: document.getElementById("roadmap-list"),
  moduleGrid: document.getElementById("module-grid"),
  levelGrid: document.getElementById("level-grid"),
  levelSection: document.getElementById("level-section"),
  quizSection: document.getElementById("quiz-section"),
  quizMeta: document.getElementById("quiz-meta"),
  questionTitle: document.getElementById("question-title"),
  liveScore: document.getElementById("live-score"),
  progressBar: document.getElementById("progress-bar"),
  questionText: document.getElementById("question-text"),
  questionCode: document.getElementById("question-code"),
  optionsList: document.getElementById("options-list"),
  feedbackBox: document.getElementById("feedback-box"),
  nextButton: document.getElementById("next-button"),
  resultsSection: document.getElementById("results-section"),
  resultsSummary: document.getElementById("results-summary"),
  resultsBreakdown: document.getElementById("results-breakdown"),
  retryLevelButton: document.getElementById("retry-level-button"),
  nextLevelButton: document.getElementById("next-level-button"),
  reviewSection: document.getElementById("review-section"),
  reviewLevelSelect: document.getElementById("review-level-select"),
  openReviewButton: document.getElementById("open-review-button"),
  reviewEmpty: document.getElementById("review-empty"),
  reviewDetails: document.getElementById("review-details"),
  reviewSummary: document.getElementById("review-summary"),
  reviewBreakdown: document.getElementById("review-breakdown")
};

init();

function init() {
  applyCurrentProfile();
  attachEvents();
  renderRoadmap();
  renderModules();
  renderLevels();
  renderReviewOptions();
  updateSnapshot();
}

function attachEvents() {
  elements.createProfileButton.addEventListener("click", handleCreateProfile);
  elements.loginProfileButton.addEventListener("click", handleLoginProfile);
  elements.logoutProfileButton.addEventListener("click", handleLogoutProfile);
  elements.nextButton.addEventListener("click", moveToNextQuestion);
  elements.retryLevelButton.addEventListener("click", () => {
    if (state.selectedLevel) {
      startLevel(state.selectedLevel);
    }
  });
  elements.nextLevelButton.addEventListener("click", moveToNextLevel);
  elements.openReviewButton.addEventListener("click", openSelectedReview);
  elements.toggleProfilePanelButton.addEventListener("click", toggleProfilePanel);
}

function toggleProfilePanel() {
  const isHidden = elements.profilePanelContent.classList.toggle("hidden");
  elements.toggleProfilePanelButton.textContent = isHidden ? "Show Profile" : "Hide Profile";
  elements.toggleProfilePanelButton.setAttribute("aria-expanded", String(!isHidden));
}

function renderRoadmap() {
  elements.roadmapList.innerHTML = "";
  modules.forEach((module) => {
    const item = document.createElement("li");
    const completed = getCompletedLevelsForModule(module.id).length;
    item.textContent = `${String(module.order).padStart(2, "0")} | ${module.title} (${completed}/10 levels)`;
    elements.roadmapList.appendChild(item);
  });
}

function renderModules() {
  elements.moduleGrid.innerHTML = "";

  modules.forEach((module) => {
    const completed = getCompletedLevelsForModule(module.id).length;
    const card = document.createElement("button");
    card.className = `category-card ${module.id === state.selectedModuleId ? "active" : ""}`;
    card.innerHTML = `
      <span class="module-order">${module.stage}</span>
      <h3>${module.title}</h3>
      <p>${module.description}</p>
      <small>${completed}/10 levels done | 100 questions total</small>
    `;
    card.addEventListener("click", () => {
      state.selectedModuleId = module.id;
      state.selectedLevel = null;
      resetQuizState();
      renderModules();
      renderLevels();
      renderReviewOptions();
      updateSnapshot();
    });
    elements.moduleGrid.appendChild(card);
  });
}

function renderLevels() {
  const module = getSelectedModule();
  elements.levelGrid.innerHTML = "";
  elements.levelSection.classList.remove("hidden");

  for (let level = 1; level <= 10; level += 1) {
    const attempt = getSavedAttempt(module.id, level);
    const button = document.createElement("button");
    button.className = `level-card ${level === state.selectedLevel ? "active" : ""}`;
    button.innerHTML = `
      <div>Level ${level}</div>
      <small>${attempt ? `Done | Best ${attempt.score}/10` : difficultyLabel(level)}</small>
    `;
    button.addEventListener("click", () => startLevel(level));
    elements.levelGrid.appendChild(button);
  }
}

function startLevel(level) {
  state.selectedLevel = level;
  state.currentQuestions = getQuestionBank(getSelectedModule()).slice((level - 1) * 10, level * 10);
  state.currentIndex = 0;
  state.score = 0;
  state.answered = false;
  state.lastResults = [];

  elements.resultsSection.classList.add("hidden");
  elements.quizSection.classList.remove("hidden");
  elements.feedbackBox.classList.add("hidden");
  elements.nextButton.classList.add("hidden");
  renderLevels();
  renderQuestion();
}

function renderQuestion() {
  const question = state.currentQuestions[state.currentIndex];
  const module = getSelectedModule();

  elements.quizMeta.textContent = `${module.title} | Level ${state.selectedLevel} | Question ${state.currentIndex + 1} of 10`;
  elements.questionTitle.textContent = levelTitle(state.selectedLevel);
  elements.liveScore.textContent = `${state.score} / ${state.currentIndex}`;
  elements.progressBar.style.width = `${(state.currentIndex / state.currentQuestions.length) * 100}%`;
  elements.questionText.textContent = question.prompt;
  elements.optionsList.innerHTML = "";

  if (question.code) {
    elements.questionCode.textContent = question.code;
    elements.questionCode.classList.remove("hidden");
  } else {
    elements.questionCode.classList.add("hidden");
    elements.questionCode.textContent = "";
  }

  elements.feedbackBox.classList.add("hidden");
  elements.feedbackBox.textContent = "";
  elements.nextButton.classList.add("hidden");
  state.answered = false;

  question.options.forEach((option) => {
    const button = document.createElement("button");
    button.className = "option-button";
    button.textContent = option;
    button.addEventListener("click", () => handleAnswer(option));
    elements.optionsList.appendChild(button);
  });
}

function handleAnswer(selectedAnswer) {
  if (state.answered) {
    return;
  }

  state.answered = true;
  const question = state.currentQuestions[state.currentIndex];
  const isCorrect = selectedAnswer === question.correctAnswer;

  if (isCorrect) {
    state.score += 1;
  }

  Array.from(elements.optionsList.children).forEach((button) => {
    button.disabled = true;
    if (button.textContent === question.correctAnswer) {
      button.classList.add("correct");
    } else if (button.textContent === selectedAnswer) {
      button.classList.add("wrong");
    }
  });

  state.lastResults.push({
    prompt: question.prompt,
    code: question.code || "",
    selectedAnswer,
    correctAnswer: question.correctAnswer,
    explanation: question.explanation,
    isCorrect
  });

  elements.liveScore.textContent = `${state.score} / ${state.currentIndex + 1}`;
  elements.feedbackBox.className = `feedback-box ${isCorrect ? "success" : "error"}`;
  elements.feedbackBox.innerHTML = `
    <div class="feedback-reaction">
      <span class="feedback-emoji">${isCorrect ? ":)" : ":/"}</span>
      <strong>${isCorrect ? "Correct answer" : "Not quite"}</strong>
    </div>
    <div>${question.explanation}</div>
  `;
  elements.feedbackBox.classList.remove("hidden");
  elements.nextButton.classList.remove("hidden");
}

function moveToNextQuestion() {
  if (!state.answered) {
    return;
  }

  state.currentIndex += 1;
  if (state.currentIndex >= state.currentQuestions.length) {
    completeLevel();
    return;
  }

  renderQuestion();
}

function completeLevel() {
  const module = getSelectedModule();
  const percentage = Math.round((state.score / state.currentQuestions.length) * 100);
  const savedTo = saveCompletedLevel(module.id, state.selectedLevel, state.score, state.lastResults);

  elements.quizSection.classList.add("hidden");
  elements.resultsSection.classList.remove("hidden");
  elements.progressBar.style.width = "100%";
  elements.resultsSummary.textContent = `You scored ${state.score} out of 10 in ${module.title}, Level ${state.selectedLevel} (${percentage}%). ${savedTo}`;
  elements.resultsBreakdown.innerHTML = state.lastResults
    .map((result, index) => {
      const codeBlock = result.code
        ? `<pre class="question-code">${escapeHtml(result.code)}</pre>`
        : "";
      return `
        <div class="result-item">
          <strong>Question ${index + 1}</strong>
          <span>${result.prompt}</span>
          ${codeBlock}
          <span>Your answer: ${result.selectedAnswer}</span>
          <span>Correct answer: ${result.correctAnswer}</span>
          <span>${result.explanation}</span>
        </div>
      `;
    })
    .join("");

  elements.nextLevelButton.classList.toggle("hidden", state.selectedLevel >= 10);

  renderRoadmap();
  renderModules();
  renderLevels();
  renderReviewOptions();
  updateSnapshot();
}

function moveToNextLevel() {
  if (!state.selectedLevel || state.selectedLevel >= 10) {
    return;
  }
  startLevel(state.selectedLevel + 1);
}

function renderReviewOptions() {
  const module = getSelectedModule();
  const attempts = getCompletedLevelsForModule(module.id);
  elements.reviewSection.classList.remove("hidden");

  if (!attempts.length) {
    elements.reviewLevelSelect.innerHTML = `<option value="">No saved levels yet</option>`;
    elements.reviewLevelSelect.disabled = true;
    elements.reviewEmpty.classList.remove("hidden");
    elements.reviewDetails.classList.add("hidden");
    return;
  }

  elements.reviewLevelSelect.disabled = false;
  elements.reviewLevelSelect.innerHTML = attempts
    .map((attempt) => `<option value="${attempt.level}">Level ${attempt.level} | Score ${attempt.score}/10</option>`)
    .join("");
  elements.reviewEmpty.classList.add("hidden");
}

function openSelectedReview() {
  const level = Number(elements.reviewLevelSelect.value);
  if (!level) {
    return;
  }

  const attempt = getSavedAttempt(getSelectedModule().id, level);
  if (!attempt) {
    return;
  }

  elements.reviewDetails.classList.remove("hidden");
  elements.reviewSummary.textContent = `${getSelectedModule().title} | Level ${level} | Score ${attempt.score}/10 | Saved ${new Date(attempt.completedAt).toLocaleString()}`;
  elements.reviewBreakdown.innerHTML = attempt.results
    .map((result, index) => {
      const codeBlock = result.code
        ? `<pre class="question-code">${escapeHtml(result.code)}</pre>`
        : "";
      return `
        <div class="result-item">
          <strong>Question ${index + 1}</strong>
          <span>${result.prompt}</span>
          ${codeBlock}
          <span>Your answer: ${result.selectedAnswer}</span>
          <span>Correct answer: ${result.correctAnswer}</span>
          <span>${result.explanation}</span>
        </div>
      `;
    })
    .join("");
}

function getQuestionBank(module) {
  if (!questionBankCache.has(module.id)) {
    questionBankCache.set(module.id, generateQuestionBank(module));
  }
  return questionBankCache.get(module.id);
}

function generateQuestionBank(module) {
  const questions = [];

  for (let level = 1; level <= 10; level += 1) {
    const eligibleFacts = module.facts.filter((fact) => fact.level <= Math.min(level + 1, 4));
    for (let slot = 0; slot < 10; slot += 1) {
      const fact = eligibleFacts[(slot + level - 1) % eligibleFacts.length];
      const question = buildQuestion(module, eligibleFacts, fact, level, slot);
      questions.push(question);
    }
  }

  return questions;
}

function buildQuestion(module, factPool, fact, level, slot) {
  const templateTypes = getTemplateTypesForLevel(level);
  const template = templateTypes[slot % templateTypes.length];

  switch (template) {
    case "definition-to-concept":
      return buildDefinitionToConceptQuestion(factPool, fact);
    case "concept-to-purpose":
      return buildConceptToPurposeQuestion(factPool, fact);
    case "task-to-concept":
      return buildTaskToConceptQuestion(factPool, fact);
    case "code-meaning":
      return buildCodeMeaningQuestion(factPool, fact);
    case "correct-statement":
      return buildCorrectStatementQuestion(factPool, fact);
    case "workflow":
      return buildWorkflowQuestion(module, factPool, fact, level);
    default:
      return buildDefinitionToConceptQuestion(factPool, fact);
  }
}

function buildDefinitionToConceptQuestion(factPool, fact) {
  const distractors = factPool
    .filter((item) => item.concept !== fact.concept)
    .map((item) => item.concept);

  return makeQuestion(
    `Which concept matches this description: ${fact.definition}?`,
    fact.concept,
    distractors,
    `${fact.concept} is the correct choice because it means ${fact.definition}.`
  );
}

function buildConceptToPurposeQuestion(factPool, fact) {
  const distractors = factPool
    .filter((item) => item.concept !== fact.concept)
    .map((item) => item.purpose);

  return makeQuestion(
    `Why would a data analyst use ${fact.concept}?`,
    capitalize(fact.purpose),
    distractors.map(capitalize),
    `A data analyst uses ${fact.concept} to ${fact.purpose}.`
  );
}

function buildTaskToConceptQuestion(factPool, fact) {
  const distractors = factPool
    .filter((item) => item.concept !== fact.concept)
    .map((item) => item.concept);

  return makeQuestion(
    `An analyst needs to ${fact.task}. Which concept or tool best fits?`,
    fact.concept,
    distractors,
    `${fact.concept} fits because it helps analysts ${fact.purpose}.`
  );
}

function buildCodeMeaningQuestion(factPool, fact) {
  const codeFacts = factPool.filter((item) => item.code && item.codeMeaning && item.concept !== fact.concept);
  const distractors = codeFacts.map((item) => capitalize(item.codeMeaning));

  return makeQuestion(
    `What does this code do?`,
    capitalize(fact.codeMeaning),
    distractors,
    `${fact.concept} is the right idea here because this code is used to ${fact.codeMeaning}.`,
    fact.code
  );
}

function buildCorrectStatementQuestion(factPool, fact) {
  const distractors = factPool
    .filter((item) => item.concept !== fact.concept)
    .slice(0, 5)
    .map((item, index) => {
      const fallbackFact = factPool.find((candidate) => candidate.concept !== item.concept && candidate.purpose !== item.purpose) || fact;
      const mismatchedPurpose = fallbackFact.purpose;
      return `${item.concept} is used to ${mismatchedPurpose}.`;
    });

  return makeQuestion(
    `Which statement is correct?`,
    `${fact.concept} is used to ${fact.purpose}.`,
    distractors,
    `The correct statement is that ${fact.concept} is used to ${fact.purpose}.`
  );
}

function buildWorkflowQuestion(module, factPool, fact, level) {
  const scenario = level >= 9
    ? `You are building a repeatable analyst workflow in ${module.title}.`
    : `You are solving a hands-on analyst task in ${module.title}.`;
  const distractors = factPool
    .filter((item) => item.concept !== fact.concept)
    .map((item) => item.concept);

  return makeQuestion(
    `${scenario} Which tool or concept should you choose first if you need to ${fact.task}?`,
    fact.concept,
    distractors,
    `${fact.concept} is the best fit because it helps analysts ${fact.purpose}.`
  );
}

function makeQuestion(prompt, correctAnswer, distractorPool, explanation, code = "") {
  const options = buildUniqueOptions(correctAnswer, distractorPool);
  return {
    prompt,
    options: shuffle(options),
    correctAnswer,
    explanation,
    code
  };
}

function buildUniqueOptions(correctAnswer, distractorPool) {
  const normalized = new Set([normalizeChoice(correctAnswer)]);
  const options = [correctAnswer];

  for (const option of shuffle([...distractorPool])) {
    const normalizedOption = normalizeChoice(option);
    if (!normalized.has(normalizedOption)) {
      normalized.add(normalizedOption);
      options.push(option);
    }
    if (options.length === 4) {
      break;
    }
  }

  while (options.length < 4) {
    const filler = `Not ${correctAnswer}`;
    if (!normalized.has(normalizeChoice(filler))) {
      options.push(filler);
      normalized.add(normalizeChoice(filler));
    } else {
      options.push(`${filler} ${options.length}`);
    }
  }

  return options;
}

function getTemplateTypesForLevel(level) {
  if (level <= 2) {
    return ["definition-to-concept", "concept-to-purpose", "definition-to-concept", "task-to-concept"];
  }
  if (level <= 4) {
    return ["task-to-concept", "concept-to-purpose", "correct-statement", "definition-to-concept"];
  }
  if (level <= 6) {
    return ["task-to-concept", "correct-statement", "code-meaning", "concept-to-purpose"];
  }
  if (level <= 8) {
    return ["code-meaning", "task-to-concept", "workflow", "correct-statement"];
  }
  return ["workflow", "code-meaning", "correct-statement", "task-to-concept"];
}

function handleCreateProfile() {
  const name = elements.profileNameInput.value.trim();
  const focus = elements.profileFocusInput.value;
  const password = elements.profilePasswordInput.value;

  if (!name || !password) {
    showProfileMessage("Enter both a learner name and password to create a profile.", "error");
    return;
  }

  const profileId = buildProfileId(name);
  if (profilesStore.profiles[profileId]) {
    showProfileMessage("That learner name already exists in this browser. Log in instead.", "error");
    return;
  }

  profilesStore.profiles[profileId] = {
    id: profileId,
    name,
    focus,
    passwordHash: hashPassword(password),
    progress: {}
  };
  profilesStore.currentProfileId = profileId;
  saveProfilesStore();
  applyCurrentProfile();
  showProfileMessage(`Profile created for ${name}. Your Python analyst progress will now save here.`, "success");
}

function handleLoginProfile() {
  const name = elements.profileNameInput.value.trim();
  const password = elements.profilePasswordInput.value;

  if (!name || !password) {
    showProfileMessage("Enter the learner name and password to log in.", "error");
    return;
  }

  const profileId = buildProfileId(name);
  const profile = profilesStore.profiles[profileId];

  if (!profile || profile.passwordHash !== hashPassword(password)) {
    showProfileMessage("The learner name or password does not match a saved profile.", "error");
    return;
  }

  profilesStore.currentProfileId = profileId;
  saveProfilesStore();
  applyCurrentProfile();
  showProfileMessage(`Welcome back, ${profile.name}. Your saved Python learning progress is loaded.`, "success");
}

function handleLogoutProfile() {
  profilesStore.currentProfileId = null;
  saveProfilesStore();
  applyCurrentProfile();
  showProfileMessage("You are now signed out. Guest browser progress is active again.", "success");
}

function applyCurrentProfile() {
  state.currentProfileId = profilesStore.currentProfileId;
  const profile = getCurrentProfile();

  if (profile) {
    elements.profileNameLabel.textContent = profile.name;
    elements.profileTrackLabel.textContent = formatFocus(profile.focus);
    elements.saveStatusLabel.textContent = profile.name;
    elements.logoutProfileButton.classList.remove("hidden");
    elements.profileFocusInput.value = profile.focus;
  } else {
    elements.profileNameLabel.textContent = "Guest";
    elements.profileTrackLabel.textContent = "Python Analyst Path";
    elements.saveStatusLabel.textContent = "Guest browser";
    elements.logoutProfileButton.classList.add("hidden");
  }

  resetQuizState();
  renderRoadmap();
  renderModules();
  renderLevels();
  renderReviewOptions();
  updateSnapshot();
}

function showProfileMessage(message, type) {
  elements.profileMessage.className = `feedback-box ${type === "error" ? "error" : "success"}`;
  elements.profileMessage.textContent = message;
  elements.profileMessage.classList.remove("hidden");
}

function resetQuizState() {
  state.selectedLevel = null;
  state.currentQuestions = [];
  state.currentIndex = 0;
  state.score = 0;
  state.answered = false;
  state.lastResults = [];
  elements.quizSection.classList.add("hidden");
  elements.resultsSection.classList.add("hidden");
  elements.feedbackBox.classList.add("hidden");
  elements.nextButton.classList.add("hidden");
  elements.progressBar.style.width = "0%";
  elements.liveScore.textContent = "0 / 0";
}

function updateSnapshot() {
  elements.selectedModuleLabel.textContent = getSelectedModule().title;
  elements.saveStatusLabel.textContent = getCurrentProfile() ? getCurrentProfile().name : "Guest browser";
  elements.completedLevelsLabel.textContent = String(getCompletedLevelsCount());
  elements.completedModulesLabel.textContent = String(getCompletedModulesCount());
}

function saveCompletedLevel(moduleId, level, score, results) {
  const attempt = {
    level,
    score,
    completedAt: new Date().toISOString(),
    results
  };

  const profile = getCurrentProfile();
  if (profile) {
    if (!profile.progress[moduleId]) {
      profile.progress[moduleId] = {};
    }
    profile.progress[moduleId][level] = attempt;
    profilesStore.profiles[profile.id] = profile;
    saveProfilesStore();
    return `Saved to ${profile.name}'s profile.`;
  }

  if (!guestStore.progress[moduleId]) {
    guestStore.progress[moduleId] = {};
  }
  guestStore.progress[moduleId][level] = attempt;
  saveGuestStore();
  return "Saved in this browser for guest mode.";
}

function getCompletedLevelsCount() {
  return modules.reduce((count, module) => count + getCompletedLevelsForModule(module.id).length, 0);
}

function getCompletedModulesCount() {
  return modules.filter((module) => getCompletedLevelsForModule(module.id).length === 10).length;
}

function getCompletedLevelsForModule(moduleId) {
  return Object.entries(getActiveProgress()[moduleId] || {})
    .map(([level, attempt]) => ({ level: Number(level), ...attempt }))
    .sort((a, b) => a.level - b.level);
}

function getSavedAttempt(moduleId, level) {
  return getActiveProgress()[moduleId]?.[level] || null;
}

function getActiveProgress() {
  return getCurrentProfile() ? getCurrentProfile().progress : guestStore.progress;
}

function getSelectedModule() {
  return modules.find((module) => module.id === state.selectedModuleId) || modules[0];
}

function getCurrentProfile() {
  return state.currentProfileId ? profilesStore.profiles[state.currentProfileId] || null : null;
}

function loadProfilesStore() {
  try {
    const stored = JSON.parse(localStorage.getItem(profilesStoreKey));
    return stored && typeof stored === "object"
      ? { currentProfileId: stored.currentProfileId || null, profiles: stored.profiles || {} }
      : { currentProfileId: null, profiles: {} };
  } catch (error) {
    return { currentProfileId: null, profiles: {} };
  }
}

function saveProfilesStore() {
  localStorage.setItem(profilesStoreKey, JSON.stringify(profilesStore));
}

function loadGuestStore() {
  try {
    const stored = JSON.parse(localStorage.getItem(guestStoreKey));
    return stored && typeof stored === "object"
      ? { progress: stored.progress || {} }
      : { progress: {} };
  } catch (error) {
    return { progress: {} };
  }
}

function saveGuestStore() {
  localStorage.setItem(guestStoreKey, JSON.stringify(guestStore));
}

function makeModule(id, order, title, description, stage, facts) {
  return { id, order, title, description, stage, facts };
}

function makeFact(concept, definition, purpose, task, code, codeMeaning, level) {
  return {
    concept,
    definition,
    purpose,
    task,
    code,
    codeMeaning,
    level
  };
}

function difficultyLabel(level) {
  if (level <= 3) {
    return "Build basics";
  }
  if (level <= 6) {
    return "Practice workflow";
  }
  if (level <= 8) {
    return "Read code";
  }
  return "Solve analyst scenarios";
}

function levelTitle(level) {
  if (level <= 3) {
    return `Level ${level} | Foundations`;
  }
  if (level <= 6) {
    return `Level ${level} | Applied Practice`;
  }
  if (level <= 8) {
    return `Level ${level} | Code Reading`;
  }
  return `Level ${level} | Analyst Workflow`;
}

function buildProfileId(name) {
  return name.trim().toLowerCase().replace(/\s+/g, "-");
}

function hashPassword(password) {
  return String(hashCode(`python-analyst:${password}`));
}

function hashCode(value) {
  let hash = 0;
  for (let index = 0; index < value.length; index += 1) {
    hash = (hash << 5) - hash + value.charCodeAt(index);
    hash |= 0;
  }
  return hash;
}

function formatFocus(focus) {
  const labels = {
    general: "General Data Analyst",
    "excel-to-python": "Excel To Python",
    "sql-python": "SQL + Python Analyst",
    reporting: "Reporting & Automation"
  };
  return labels[focus] || "Python Analyst Path";
}

function normalizeChoice(value) {
  return String(value).trim().toLowerCase();
}

function capitalize(value) {
  if (!value) {
    return "";
  }
  return value.charAt(0).toUpperCase() + value.slice(1);
}

function shuffle(values) {
  const clone = [...values];
  for (let index = clone.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [clone[index], clone[swapIndex]] = [clone[swapIndex], clone[index]];
  }
  return clone;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}
