from django.db import models

# Create your models here.
class Users(models.Model):
    name = models.CharField(max_length=15)
    psw = models.TextField()
    class Meta:
        verbose_name = 'Users'
        verbose_name_plural = 'Users'
        db_table='my_users_table'
    def to_json(self):
        return {
            'id' : self.id,
            'name':self.name,
            'psw':self.psw
        }

class Managers(models.Model):
    name = models.CharField(max_length=15)
    phone = models.TextField()
    users = models.ForeignKey(Users,on_delete=models.CASCADE)
    class Meta:
        verbose_name = 'Manager'
        verbose_name_plural = 'Managers'
        db_table='my_manager_table'
    def to_json(self):
        return {
            'id' : self.id,
            'name':self.name,
            'phone':self.phone,
            'users':self.users
        }

class Products(models.Model):
    name = models.CharField(max_length=15)
    describtion = models.TextField()
    cost = models.CharField(max_length=15)
    image= models.TextField()

    def to_json(self):
        return {
            'id' : self.id,
            'name':self.name,
            'describtion':self.describtion,
            'cost':self.cost,
            'image':self.image
        }

class Sales(models.Model):
    sale = models.FloatField(max_length=15)
    describtion = models.TextField()
    managers = models.ForeignKey(Managers,on_delete=models.CASCADE)
    class Meta:
        verbose_name = 'Sales'
        verbose_name_plural = 'Sales'
        db_table='my_sales_table'
    def to_json(self):
        return {
            'id' : self.id,
            'sale':self.sale,
            'describtion':self.describtion,
            'managers':self.managers
        }

class Shop(models.Model):
    name = models.CharField(max_length=15)
    describtion = models.TextField()
    cost = models.CharField(max_length=15)
    image= models.TextField()

    def to_json(self):
        return {
            'id' : self.id,
            'name':self.name,
            'describtion':self.describtion,
            'cost':self.cost,
            'image':self.image
        }

class Survey(models.Model):
    order = models.TextField()
    comment= models.TextField()
    def to_json(self):
        return {
            'id' : self.id,
            'order':self.order,
            'comment':self.comment
        }
