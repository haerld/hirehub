"use client";
import React, { useState } from 'react';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

const MultiTabForm = () => {
  const [activeTab, setActiveTab] = useState("personal");

  // Personal Information Tab
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  // Documents Tab  
  const [resume, setResume] = useState('');
  const [cover, setCover] = useState('');

  const handleSubmit = () => {
    // Handle form submission
    console.log({
      firstName, lastName, email, phone,
      resume, cover
    });
  };

  const handleNextClick = () => {
    // Switch to the Documents tab
    setActiveTab("documents");
  };
  const handleBackClick = () => {
    // Switch to the Documents tab
    setActiveTab("personal");
  };

  return (
    <div className="w-[70%] mx-auto border p-10 pb-16 mt-10 mb-24 rounded-xl">
      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList>
          <TabsTrigger value="personal">Personal Information</TabsTrigger>
          <TabsTrigger value="documents">Documents</TabsTrigger>
        </TabsList>
          <hr className=""/>
        <TabsContent value="personal">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Input
                  id="firstName"
                  placeholder="First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                  className="h-12 rounded-lg placeholder:text-zinc-300 !important"
                />
              </div>
              <div>
              <Input
                  id="last_name"
                  placeholder="Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                  className="h-12 rounded-lg placeholder:text-zinc-300 !important"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Input
                  id="firstName"
                  placeholder="Mobile Number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                  className="h-12 rounded-lg placeholder:text-zinc-300 !important"
                />
              </div>
              <div>
              <Input
                  id="last_name"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="h-12 rounded-lg placeholder:text-zinc-300 !important"
                />
              </div>
            </div>
            <div className="flex justify-end">
              <Button onClick={handleNextClick} className="bg-blue-500 hover:bg-blue-600 text-white">
                Next
              </Button>
            </div>
          </form>
        </TabsContent>
        <TabsContent value="documents">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="resume">Resume</Label>
              <Textarea
                id="resume"
                value={resume}
                onChange={(e) => setResume(e.target.value)}
                required
              />
            </div>
            <div>
              <Label htmlFor="cover">Cover Letter</Label>
              <Textarea
                id="cover"
                value={cover}
                onChange={(e) => setCover(e.target.value)}
                required
              />
            </div>
            <div className="flex items-center justify-end">
              <Button onClick={handleBackClick} className="outline h-9 bg-transparent outline-darkGray text-darkGray hover:bg-zinc-200" >Back</Button>
              <Button type="submit" className="ml-3 bg-jobdetails hover: text-white">
                Submit
              </Button>
            </div>
          </form>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default MultiTabForm;