from groupmates import groupmates

def filter_by_avg(students, min_avg):
    result = []
    for s in students:
        avg = sum(s["marks"]) / float(len(s["marks"]))
        if avg >= min_avg:
            result.append(s)
    return result

def main():
    filtered = filter_by_avg(groupmates, 4.0)
    for s in filtered:
        print(s["name"])


if __name__ == '__main__':
    main()
