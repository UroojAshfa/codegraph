// test-files/classes.js

class User {
    constructor(name) {
      this.name = name;
    }
  
    getName() {
      return this.name;
    }
  
    getUpperName() {
      return this.getName().toUpperCase();
    }
  
    async fetchProfile() {
      const data = await this.loadData();
      return data;
    }
  
    loadData() {
      return { profile: 'data' };
    }
  }
  
  class Admin extends User {
    getRole() {
      return 'admin';
    }
  
    getFullInfo() {
      const name = this.getName();
      const role = this.getRole();
      return { name, role };
    }
  }
  

  const user = new User('Alice');
  const name = user.getName();