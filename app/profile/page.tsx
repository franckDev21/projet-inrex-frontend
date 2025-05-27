'use client';

import { useState, useEffect } from 'react';
import { User, Settings, FileText, CreditCard, Bell, Sun, Moon, Upload, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains('dark');
    setIsDark(isDarkMode);
  }, []);

  const toggleTheme = () => {
    document.documentElement.classList.toggle('dark');
    setIsDark(!isDark);
  };

  const menuItems = [
    { id: 'profile', label: 'Mon Profil', icon: User },
    { id: 'settings', label: 'Paramètres', icon: Settings },
    { id: 'documents', label: 'Mes Documents', icon: FileText },
    { id: 'billing', label: 'Abonnement', icon: CreditCard },
    { id: 'notifications', label: 'Notifications', icon: Bell },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'profile':
        return <ProfileContent />;
      case 'settings':
        return <SettingsContent />;
      case 'documents':
        return <DocumentsContent />;
      case 'billing':
        return <BillingContent />;
      case 'notifications':
        return <NotificationsContent />;
      default:
        return <ProfileContent />;
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 bg-card text-card-foreground shadow-lg h-screen fixed border-r border-accent/10">
          <div className="p-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">Mon Espace</h2>
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-accent/10 transition-colors"
                aria-label="Toggle theme"
              >
                {isDark ? (
                  <Sun className="h-5 w-5 text-yellow-500" />
                ) : (
                  <Moon className="h-5 w-5 text-slate-700" />
                )}
              </button>
            </div>
          </div>
          <nav className="mt-6">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center px-6 py-4 hover:bg-accent/10 transition-colors ${
                  activeTab === item.id ? 'bg-primary/10 text-primary border-r-4 border-primary' : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                <item.icon className="h-5 w-5 mr-3" />
                <span>{item.label}</span>
              </button>
            ))}
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 ml-64 p-8">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

const ProfileContent = () => (
  <div className="space-y-6">
    <h1 className="text-3xl font-bold">Mon Profil</h1>
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-card text-card-foreground shadow-lg rounded-lg p-6 border border-accent/10"
    >
      <div className="flex items-center space-x-6">
        <div className="relative group cursor-pointer">
          <div className="h-24 w-24 bg-accent/10 rounded-full flex items-center justify-center overflow-hidden transition-transform duration-300 group-hover:scale-105">
            <input
              type="file"
              className="hidden"
              id="avatar-upload"
              accept="image/*"
            />
            <label
              htmlFor="avatar-upload"
              className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
            >
              <Upload className="h-6 w-6 text-white" />
            </label>
          <User className="h-12 w-12 text-muted-foreground" />
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-medium">John Doe</h2>
          <p className="text-muted-foreground">john.doe@example.com</p>
        </div>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-6">
        <div className="space-y-2">
          <label className="block text-sm font-medium text-muted-foreground">Nom</label>
          <input
            type="text"
            className="w-full px-3 py-2 bg-background border border-accent/20 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors" defaultValue="John" />
        </div>
        <div className="space-y-2">
          <label className="block text-sm font-medium text-muted-foreground">Prénom</label>
          <input
            type="text"
            className="w-full px-3 py-2 bg-background border border-accent/20 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors" defaultValue="Doe" />
        </div>
        <div className="space-y-2">
          <label className="block text-sm font-medium text-muted-foreground">Email</label>
          <input type="email" className="w-full px-3 py-2 border rounded-md" defaultValue="john.doe@example.com" />
        </div>
        <div className="space-y-2">
          <label className="block text-sm font-medium text-muted-foreground">Téléphone</label>
          <input type="tel" className="w-full px-3 py-2 border rounded-md" defaultValue="+33 6 12 34 56 78" />
        </div>
      </div>
      <div className="mt-6">
        <button className="bg-primary text-primary-foreground px-6 py-2.5 rounded-md hover:opacity-90 transition-all duration-200 flex items-center group">
          Sauvegarder les modifications
          <ChevronRight className="ml-2 h-4 w-4 transform transition-transform group-hover:translate-x-1" />
        </button>
      </div>
    </motion.div>
  </div>
);

const SettingsContent = () => (
  <div className="space-y-6">
    <h1 className="text-3xl font-bold">Paramètres</h1>
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-card text-card-foreground shadow-lg rounded-lg p-6 border border-accent/10 space-y-6">
      <div>
        <h3 className="text-lg font-medium">Préférences de notification</h3>
        <div className="mt-4 space-y-4">
          <div className="flex items-center justify-between">
            <span>Notifications par email</span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" defaultChecked />
              <div className="w-11 h-6 bg-accent/20 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primary/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-background after:border-accent/20 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
            </label>
          </div>
          <div className="flex items-center justify-between">
            <span>Notifications push</span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" defaultChecked />
              <div className="w-11 h-6 bg-accent/20 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primary/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-background after:border-accent/20 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
            </label>
          </div>
        </div>
      </div>
      <div>
        <h3 className="text-lg font-medium">Sécurité</h3>
        <div className="mt-4">
          <button className="text-primary hover:text-primary/80 font-medium">Changer le mot de passe</button>
        </div>
      </div>
    </motion.div>
  </div>
);

const DocumentsContent = () => (
  <div className="space-y-6">
    <h1 className="text-3xl font-bold">Mes Documents</h1>
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-card text-card-foreground shadow-lg rounded-lg p-6 border border-accent/10"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {[1, 2, 3].map((doc) => (
          <div key={doc} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
            <FileText className="h-8 w-8 text-primary mb-2" />
            <h3 className="font-medium">Document {doc}</h3>
            <p className="text-sm text-muted-foreground">Modifié le 27 mai 2025</p>
          </div>
        ))}
      </div>
    </motion.div>
  </div>
);

const BillingContent = () => (
  <div className="space-y-6">
    <h1 className="text-3xl font-bold">Abonnement</h1>
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-card text-card-foreground shadow-lg rounded-lg p-6 border border-accent/10"
    >
      <div className="flex items-center justify-between pb-4 border-b">
        <div>
          <h3 className="text-lg font-medium">Plan Premium</h3>
          <p className="text-muted-foreground">Facturé mensuellement</p>
        </div>
        <span className="text-2xl font-bold">29,99 €/mois</span>
      </div>
      <div className="mt-4">
        <button className="bg-primary text-primary-foreground px-6 py-2.5 rounded-md hover:opacity-90 transition-all duration-200 flex items-center group">
          Gérer l&apos;abonnement
        </button>
      </div>
    </motion.div>
  </div>
);

const NotificationsContent = () => (
  <div className="space-y-6">
    <h1 className="text-3xl font-bold">Notifications</h1>
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-card text-card-foreground shadow-lg rounded-lg divide-y border border-accent/10">
      {[1, 2, 3].map((notification) => (
        <div key={notification} className="p-4 hover:bg-accent/10 transition-colors">
          <div className="flex items-start">
            <Bell className="h-5 w-5 text-primary mt-1" />
            <div className="ml-3">
              <p className="font-medium">Notification {notification}</p>
              <p className="text-sm text-muted-foreground">Il y a 2 heures</p>
            </div>
          </div>
        </div>
      ))}
    </motion.div>
  </div>
);

export default ProfilePage;
