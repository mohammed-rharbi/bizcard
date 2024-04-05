import axios from 'axios'; // Import axios at the top of your file
import React, { useState } from 'react';
import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function loginform() {
  // State management for input fields
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission
  
    try {
      const response = await axios.post('http://localhost/api/login', {
        email,
        password,
      });

      const token = response.data.token; // Extract token from response
      localStorage.setItem('token', token);
  
      console.log('Login successful', response.data);
      console.log('Token:', token); // Log the token value
      window.location.href = '/Dash';
    } catch (error) {
      console.error('Login error:', error.response ? error.response.data : error.message);
    }
  };

  return (
    <div className="mx-auto max-w-sm space-y-6">
      <Card>
        <form onSubmit={handleSubmit}> {/* Add form tag with onSubmit handler */}
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-center mb-5">Login</CardTitle>
            <CardDescription>Enter your email below to login to your account.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label  htmlFor="email">Email</Label>
              <Input id="email" placeholder="m@example.com" required type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" required type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full" type="submit">Login</Button> {/* Ensure button submits the form */}
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}

export default loginform;