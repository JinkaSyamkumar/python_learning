
# coding: utf-8

# # Finding pattern
# - within a sequence of numbers
# - we will use <b> NumPy + SymPy </b> for this
# <br>
# 
# 
# 
# 
# - <b>SymPy is a Python library that provides symbolic calculations. </b>

# ### Given this array, find the next number in the sequence

# In[1]:


import numpy as np


# In[2]:


my_teaser_array=np.array([1,7,19,37,61,91,127,169,217,271,331])
my_teaser_array


# In[3]:


#The fields of applied statistics, artificial intelligence,
#neural networks and machine learning, have
#multiple techniques for finding patterns within datasets.


# In[4]:


#Sometimes when a pattern is not relatively apparent within a dataset,
#the differences between 
#the elements of a dataset may provide a pattern.


# #### numpy.diff
# - numpy.diff(a, [n=1], [axis=-1])
# - Calculate the n-th discrete difference along the given axis.
# - https://docs.scipy.org/doc/numpy-1.14.0/reference/generated/numpy.diff.html
# 
# - n is opetional2
# - The number of times values are differenced. If zero, the input is returned as-is.

# In[5]:


np.diff(my_teaser_array) #1 order difference between n+1 -n
#difference is 6
#original has 11 elements
#each time we perform diff, one element goes down


# In[6]:


#second level - diff is 6, totla lements 10
np.diff(my_teaser_array,2) #second order difference 


# In[7]:


#third level
np.diff(my_teaser_array,n=3)


# In[8]:


#I mentioned above that difference equations and derivatives 
#are similar. 

#We can use SymPy to calculate derivatives symbolically.


# ## SymPy
# - if sympy not included in computer, use conda sympy to get
# - <b> The first thing that we'll do is we'll initialize SymPy. We do this with an import statement from SymPy import init_session, and then we execute init_session. </b>

# In[16]:


from sympy import init_session
init_session()
# import sympy
# sympy.init_session()


# In[ ]:


#MultipleInstanceError: Multiple incompatible subclass instances of TerminalInteractiveShell are being created.

# use python not ipython 

# for this python manage.py shell
# not
# ipython manage.py shell


# sympy.init_printing(use_unicode=True)
# diff(x**3)
