# Contact Page Modularization

## Overview
ได้แยก Contact page ให้เป็น reusable Next.js components แบบ modular และรองรับ responsive design

## New Components Created

### 1. ContactForm.js
Contact form component ที่มี validation และ responsive design

**Features:**
- Form validation (required fields)
- Form submission handling
- Responsive design (mobile → desktop)
- Proper form structure with labels
- TypeScript-ready (ง่ายต่อการเพิ่ม types)

**Props:**
- `onSubmit(data)` - Callback เมื่อ submit form

**Usage:**
```jsx
const handleFormSubmit = (data) => {
  console.log("Form data:", data);
  // Send to API, show success message, etc.
};

<ContactForm onSubmit={handleFormSubmit} />
```

### 2. SocialLinks.js
Component สำหรับแสดง social media links

**Features:**
- Customizable links และ colors
- Default links (LinkedIn, GitHub)
- External link handling (opens in new tab)
- Responsive layout
- Flexible button styling

**Props:**
- `links` - Array of social links
- `title` - Section title (default: "Connect with me")

**Usage:**
```jsx
const socialLinks = [
  { 
    name: "LinkedIn", 
    href: "https://linkedin.com/in/profile", 
    color: "bg-[#0077b5] text-white" 
  },
  { 
    name: "GitHub", 
    href: "https://github.com/username", 
    color: "bg-[#333] text-white" 
  }
];

<SocialLinks links={socialLinks} title="Connect with me" />
```

### 3. ContactLayout.js
Layout wrapper สำหรับ Contact page

**Features:**
- Consistent layout กับ pages อื่น ๆ
- Responsive sidebar navigation
- Mobile/desktop header handling
- UnifiedNavigation integration

**Props:**
- `children` - Page content
- `onBackClick` - Back button handler (mobile)

## Page Structure

### Before (Monolithic)
```jsx
export default function ContactPage() {
  return (
    <div>
      {/* Hardcoded header */}
      {/* Hardcoded form */}
      {/* Hardcoded social links */}
      {/* Hardcoded navigation */}
    </div>
  );
}
```

### After (Modular)
```jsx
export default function ContactPage() {
  const handleFormSubmit = (data) => {
    // Handle form submission
  };

  return (
    <ContactLayout onBackClick={handleBackClick}>
      <ContactForm onSubmit={handleFormSubmit} />
      <SocialLinks links={socialLinks} />
    </ContactLayout>
  );
}
```

## Responsive Design

### Mobile (< 768px)
- Single column layout
- Bottom navigation
- Compact form inputs
- Stacked social buttons

### Desktop (768px+)
- Sidebar navigation
- Larger form inputs
- Horizontal social buttons layout
- Spacious design

## Form Features

### Validation
- Required fields (name, email, message)
- Email type validation
- Form submission prevention if invalid

### Accessibility
- Proper form labels
- Semantic HTML structure
- Focus management
- Screen reader friendly

### Data Handling
```jsx
// Form data structure
{
  name: "John Doe",
  email: "john@example.com", 
  message: "Hello, I'd like to connect..."
}
```

## Social Links Configuration

### Default Links
```jsx
const defaultLinks = [
  { name: "LinkedIn", href: "https://linkedin.com" },
  { name: "GitHub", href: "https://github.com" }
];
```

### Custom Links
```jsx
const customLinks = [
  { 
    name: "LinkedIn", 
    href: "https://linkedin.com/in/your-profile",
    color: "bg-[#0077b5] text-white"
  },
  { 
    name: "GitHub", 
    href: "https://github.com/your-username",
    color: "bg-[#333] text-white"
  },
  { 
    name: "Twitter", 
    href: "https://twitter.com/your-handle",
    color: "bg-[#1da1f2] text-white"
  }
];
```

## Integration with Existing System

### Uses Existing Components
- `PageHeader` - For page title และ navigation
- `UnifiedNavigation` - For consistent navigation
- Responsive design patterns from other pages

### Follows Established Patterns
- Same layout structure as other pages
- Consistent styling และ spacing
- Mobile-first responsive design
- Component-based architecture

## Next Steps

### Potential Enhancements
1. **Form Validation Library** - Add Yup/Zod for advanced validation
2. **API Integration** - Connect to email service (SendGrid, Nodemailer)
3. **Success/Error States** - Show feedback after form submission
4. **Loading States** - Show spinner during submission
5. **TypeScript** - Add proper types for better development experience

### Example API Integration
```jsx
const handleFormSubmit = async (data) => {
  try {
    setLoading(true);
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    
    if (response.ok) {
      setShowSuccess(true);
      // Reset form or redirect
    } else {
      setError('Failed to send message');
    }
  } catch (error) {
    setError('Network error');
  } finally {
    setLoading(false);
  }
};
```

## Component Benefits

✅ **Reusable** - Components สามารถใช้ในหน้าอื่นได้  
✅ **Testable** - แต่ละ component test ได้แยกกัน  
✅ **Maintainable** - แก้ไขที่เดียวใช้ได้ทั้งหมด  
✅ **Responsive** - รองรับทุกหน้าจอ  
✅ **Accessible** - เป็นมิตรกับ screen readers  
✅ **Type-safe** - พร้อมสำหรับ TypeScript  
✅ **Performance** - Optimized สำหรับ Next.js  

Contact page ตอนนี้เป็น modular, responsive และพร้อมใช้งานแล้ว! 🎉
