package entity;

public class User {

    public int id;
    public String name;
    public String password;


    public void setId(int id){this.id = id;}

    public void setName(String name){
        this.name = name;
    }

    public void setPassword(String password){
        this.password = password;
    }


    public int getId(){
        return id;
    }

    public String getName(){
        return name;
    }

    public String getPassword(){
        return password;
    }


}
