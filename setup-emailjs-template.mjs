#!/usr/bin/env node

/**
 * Skrypt do automatycznego utworzenia szablonu EmailJS
 * Uruchom: node setup-emailjs-template.mjs
 */

const ACCESS_TOKEN = '_4kIzY2fz_jK2OnnuZcWw';
const SERVICE_ID = 'service_bz4714w';

const templateConfig = {
  service_id: SERVICE_ID,
  template_name: 'umakeIT - Formularz kontaktowy',
  subject: 'Nowa wiadomość z umakeIT.pl - {{from_name}}',
  content_html: `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9fafb;">
      <div style="background-color: white; border-radius: 8px; padding: 30px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
        <h2 style="color: #7c3aed; margin-top: 0;">📧 Nowa wiadomość z formularza kontaktowego</h2>
        
        <div style="margin: 20px 0; padding: 15px; background-color: #f3f4f6; border-left: 4px solid #7c3aed; border-radius: 4px;">
          <h3 style="margin: 0 0 10px 0; color: #374151;">Dane kontaktowe:</h3>
          <p style="margin: 5px 0;"><strong>Imię i nazwisko:</strong> {{from_name}}</p>
          <p style="margin: 5px 0;"><strong>Email:</strong> <a href="mailto:{{from_email}}" style="color: #7c3aed;">{{from_email}}</a></p>
          <p style="margin: 5px 0;"><strong>Telefon:</strong> {{phone}}</p>
        </div>
        
        <div style="margin: 20px 0;">
          <h3 style="color: #374151;">Treść wiadomości:</h3>
          <div style="background-color: #f9fafb; padding: 15px; border-radius: 4px; white-space: pre-wrap;">{{message}}</div>
        </div>
        
        <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 20px 0;">
        
        <p style="color: #6b7280; font-size: 12px; margin: 10px 0 0 0;">
          Ta wiadomość została wysłana z formularza kontaktowego na stronie umakeIT.pl
        </p>
      </div>
    </div>
  `,
  content_text: `
Nowa wiadomość z formularza kontaktowego umakeIT

Od: {{from_name}}
Email: {{from_email}}
Telefon: {{phone}}

Wiadomość:
{{message}}

---
Ta wiadomość została wysłana z formularza kontaktowego na stronie umakeIT.pl
  `,
  reply_to: '{{from_email}}'
};

async function createTemplate() {
  try {
    console.log('🚀 Tworzenie szablonu EmailJS...\n');

    const response = await fetch('https://api.emailjs.com/api/v1.0/email-templates', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${ACCESS_TOKEN}`
      },
      body: JSON.stringify(templateConfig)
    });

    if (!response.ok) {
      const error = await response.text();
      throw new Error(`Błąd API: ${response.status} - ${error}`);
    }

    const result = await response.json();
    
    console.log('✅ Szablon został utworzony pomyślnie!\n');
    console.log('📋 Template ID:', result.id);
    console.log('📧 Nazwa:', result.template_name);
    console.log('\n🔧 Teraz zaktualizuj plik /src/app/pages/Contact.tsx:');
    console.log(`   Zamień "YOUR_TEMPLATE_ID" na "${result.id}"\n`);
    
    return result.id;
  } catch (error) {
    console.error('❌ Błąd podczas tworzenia szablonu:', error.message);
    console.error('\n💡 Upewnij się, że:');
    console.error('   - Access Token jest poprawny');
    console.error('   - Masz połączenie z internetem');
    console.error('   - Szablon o tej nazwie nie istnieje już w EmailJS\n');
    process.exit(1);
  }
}

// Uruchom skrypt
createTemplate();
