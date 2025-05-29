import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const UserSettings = () => {
  const [name, setName] = useState("Full Name");
  const [email] = useState("@example.com"); // diasumsikan readonly
  const [username, setUsername] = useState("Username");

  const handleSave = (e) => {
    e.preventDefault();
    console.log("Saved settings:", { name, username });
    // Tambahkan notifikasi atau penyimpanan ke backend jika perlu
  };

  const handleLogout = () => {
    console.log("Logout clicked");
    // Tambahkan logika logout (navigasi, clear storage, dsb.)
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-100 to-purple-200 px-4 py-10">
      <Card className="w-full max-w-lg shadow-md rounded-2xl">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">User Settings</CardTitle>
        </CardHeader>
        <form onSubmit={handleSave}>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your full name"
              />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                value={email}
                readOnly
                className="cursor-not-allowed opacity-70"
              />
            </div>
            <div>
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter your username"
              />
            </div>
          </CardContent>
          <CardFooter className="flex flex-col gap-3">
            <Button type="submit" className="w-full bg-orange-600 hover:bg-orange-700">
              Save Changes
            </Button>
            <Button type="button" variant="outline" onClick={handleLogout} className="w-full">
              Logout
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
};

export default UserSettings;
