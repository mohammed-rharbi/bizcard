import React, { useState } from 'react';
import axios from 'axios';
import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function cardcreate() {

  const [formData, setFormData] = useState({
    name: '',
    title: '',
    company: '',
    phone: '',
  });

  // Function to handle form input changes
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    try {
      const token = localStorage.getItem('token'); // Get token from local storage
      const user = JSON.parse(localStorage.getItem('authUser'));
       // Get user object from local storage
  
      if (!user) {
        throw new Error('User is not authenticated.'); 
      }
  
      const response = await axios.post(
        'http://localhost/api/card',
        {
          ...formData,
          users_id: user.id, // Include the user ID in the card data
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
          },
        }
      );
      console.log(response.data);
      window.location.href = '/Dash';
    } catch (error) {
      console.error('Submission error:', error);
      // Handle error (e.g., redirect to login page)
    }
  };
  
  

  return (
    <div className="mx-auto max-w-sm space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Create contact</CardTitle>
          <CardDescription>Enter the contact's information.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              {/* Input fields with onChange to update state */}
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Enter the name" value={formData.name} onChange={handleChange} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="title">Title</Label>
                <Input id="title" placeholder="Enter the title" value={formData.title} onChange={handleChange} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="company">Company</Label>
                <Input id="company" placeholder="Enter the company" value={formData.company} onChange={handleChange} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" placeholder="Enter the phone" value={formData.phone} onChange={handleChange} />
              </div>
            </div>
            <Button className="mt-4" type="submit">Submit</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

export default cardcreate;
