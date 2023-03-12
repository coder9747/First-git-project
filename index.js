class Student
{
    name;
    id;
    setName(name)
    {
        this.name = name;
    }
    setId(id)
    {
        this.id = id;
    }
    getName()
    {
        return this.name;
    }
    getId()
    {
        return this.id;
    }
    static one()
    {
        console.log("Hello World");
    }
    
}

//Creating Objects;
const student1 = new Student();
student1.name = "Pratyush";
student1.setId(23);
console.log(Student.one());