// Enhanced DiagnoHub Application - Optimized Performance Version
class DiagnoHub {
    constructor() {
        this.selectedTests = [];
        this.totalPrice = 0;
        this.currentForm = 'login';
        this.isLoggedIn = false;
        this.currentNotification = null;
        
        
        // Cache DOM elements for better performance
        this.elements = {};
        
        
        this.partnersData = {
            'aj-hospital': {
                name: "A.J. Hospital & Research Centre",
                location: "NH-66, Kuntikana, Mangalore",
                phone: "+91-824-2225533",
                email: "info@ajhospital.in",
                specialties: ["24/7 Emergency", "Advanced Imaging", "NABL Certified"],
                certifications: ["NABL", "ISO", "NABH"],
                established: "1994",
                description: "A.J. Hospital & Research Centre is a premier healthcare institution providing comprehensive medical services with state-of-the-art facilities and expert medical professionals.",
                services: ["24/7 Emergency", "Advanced Imaging", "NABL Certified"],
                coordinates: [12.8698, 74.8456]
            },
            'thyrocare': {
                name: "Thyrocare Mangalore",
                location: "Boomika Towers, Bendoorwell, Mangalore",
                phone: "+91-824-2441414",
                email: "mangalore@thyrocare.com",
                specialties: ["Automated Testing", "Health Packages", "CAP Certified"],
                certifications: ["NABL", "CAP"],
                established: "1996",
                description: "Thyrocare is India's leading diagnostic chain offering automated testing with cutting-edge technology and comprehensive health packages at affordable prices.",
                services: ["Automated Testing", "Health Packages", "CAP Certified"],
                coordinates: [12.8731, 74.8519]
            },
            'kasturba': {
                name: "Kasturba Medical College Laboratory",
                location: "Attavar, Near Railway Station, Mangalore",
                phone: "+91-824-2444556",
                email: "lab@manipal.edu",
                specialties: ["NABL Accredited", "Specialized Testing", "Academic Excellence"],
                certifications: ["NABL", "Academic Accreditation"],
                established: "2008",
                description: "Kasturba Medical College Laboratory combines academic excellence with clinical expertise, offering specialized diagnostic services backed by research and education.",
                services: ["NABL Accredited", "Specialized Testing", "Academic Excellence"],
                coordinates: [12.8644, 74.8421]
            },
            'mediscan': {
                name: "Mediscan Diagnostic Centre",
                location: "Upper Bendur, Opposite SCS Hospital, Mangalore",
                phone: "+91-824-2492929",
                email: "info@mediscanmangalore.com",
                specialties: ["Comprehensive Pathology", "Competitive Pricing", "ISO Certified"],
                certifications: ["NABL", "ISO"],
                established: "2010",
                description: "Mediscan Diagnostic Centre focuses on providing comprehensive pathology services with quick turnaround times and affordable pricing for all patients.",
                services: ["Comprehensive Pathology", "Competitive Pricing", "ISO Certified"],
                coordinates: [12.8756, 74.8398]
            },
            'sparsha': {
                name: "Sparsha Diagnostics",
                location: "Bendoorwell Circle, Kankanady, Mangalore",
                phone: "+91-824-2225577",
                email: "contact@sparshadiagnostics.com",
                specialties: ["Family Healthcare", "Pediatric Diagnostics", "NABL Certified"],
                certifications: ["NABL", "ISO"],
                established: "2012",
                description: "Sparsha Diagnostics specializes in family healthcare with a focus on pediatric diagnostics and preventive care, ensuring health wellness for all age groups.",
                services: ["Family Healthcare", "Pediatric Diagnostics", "NABL Certified"],
                coordinates: [12.8723, 74.8501]
            },
            'harsha': {
                name: "Harsha Modern Diagnostics",
                location: "Bejai-Kapikad Road, Mangalore",
                phone: "+91-824-2225588",
                email: "info@harshadiagnostics.com",
                specialties: ["Cardiac Care", "Diabetic Monitoring", "TMT & ECHO"],
                certifications: ["NABL", "Cardiac Accreditation"],
                established: "2012",
                description: "Harsha Modern Diagnostics is specialized in cardiac care and diabetic monitoring with advanced facilities for TMT and ECHO procedures.",
                services: ["Cardiac Care", "Diabetic Monitoring", "TMT & ECHO"],
                coordinates: [12.8789, 74.8445]
            }
        };
        

    this.init();
    
    }

    init() {
        console.log('🏥 DiagnoHub Enhanced Application Starting...');
        
        // Wait for DOM to be fully loaded
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.initializeApp());
        } else {
            this.initializeApp();
        }
    }
    

    initializeApp() {
        console.log('📋 Initializing Enhanced DiagnoHub...');
        
        // Cache DOM elements immediately
        this.cacheElements();
        
        // Check login status
        this.checkLoginStatus();
        
        // Setup all event listeners
        this.setupEventListeners();
        
        // Setup test selection with optimized handling
        this.setupTestSelection();
        
        // Initialize other features
        this.setupDateInputs();
        this.setupAccessibility();
        
        console.log('✅ DiagnoHub Enhanced Application Ready!');
    }

    cacheElements() {
        // Cache frequently used elements to improve performance
        this.elements = {
            loginPage: document.getElementById('loginPage'),
            mainSite: document.getElementById('mainSite'),
            loginForm: document.getElementById('loginForm'),
            registerForm: document.getElementById('registerForm'),
            forgotPasswordForm: document.getElementById('forgotPasswordForm'),
            selectedTests: document.getElementById('selectedTests'),
            totalPrice: document.getElementById('totalPrice'),
            proceedBooking: document.getElementById('proceedBooking'),
            partnerModal: document.getElementById('partnerModal'),
            modalBody: document.getElementById('modalBody')
        };
    }

    checkLoginStatus() {
        if (!this.elements.loginPage || !this.elements.mainSite) {
            console.error('❌ Required DOM elements not found');
            return;
        }
        
        // Check if user is already logged in
        const isLoggedIn = sessionStorage.getItem('diagnoHubLoggedIn');
        
        if (isLoggedIn === 'true') {
            console.log('👤 User already logged in');
            this.isLoggedIn = true;
            this.showMainSite();
        } else {
            console.log('🔑 User not logged in, showing login page');
            this.showLoginPage();
        }
    }

    setupEventListeners() {
        // Debounced event handlers for better performance
        const debounce = (func, wait) => {
            let timeout;
            return function executedFunction(...args) {
                const later = () => {
                    clearTimeout(timeout);
                    func(...args);
                };
                clearTimeout(timeout);
                timeout = setTimeout(later, wait);
            };
        };

        // Login form
        const loginFormElement = document.getElementById('loginFormElement');
        if (loginFormElement) {
            loginFormElement.addEventListener('submit', (e) => this.handleLogin(e));
        }

        // Register form
        const registerFormElement = document.getElementById('registerFormElement');
        if (registerFormElement) {
            registerFormElement.addEventListener('submit', (e) => this.handleRegister(e));
        }

        // Forgot password form
        const forgotFormElement = document.getElementById('forgotPasswordFormElement');
        if (forgotFormElement) {
            forgotFormElement.addEventListener('submit', (e) => this.handleForgotPassword(e));
        }

        // Logout button
        const logoutBtn = document.getElementById('logoutBtn');
        if (logoutBtn) {
            logoutBtn.addEventListener('click', () => this.handleLogout());
        }

        // Booking form
        const bookingForm = document.getElementById('bookingForm');
        if (bookingForm) {
            bookingForm.addEventListener('submit', (e) => this.handleBookingSubmission(e));
        }

        // Optimized scroll handling
        const debouncedScroll = debounce(() => {
            this.handleScroll();
        }, 16); // 60fps
        
        window.addEventListener('scroll', debouncedScroll, { passive: true });

        // Modal events
        this.setupModalEvents();

        // Navigation events with optimized smooth scrolling
        this.setupNavigationEvents();

        // Form validation events
        this.setupFormValidation();
    }

    setupTestSelection() {
        // Use event delegation for better performance
        document.addEventListener('change', (e) => {
            if (e.target.matches('input[type="checkbox"][data-price]')) {
                // Immediate visual feedback
                this.immediateTestFeedback(e.target);
                // Process selection with slight delay for smooth UX
                requestAnimationFrame(() => {
                    this.handleTestSelection(e.target);
                });
            }
        });

        // Update checkmark display immediately
        document.addEventListener('change', (e) => {
            if (e.target.matches('input[type="checkbox"]')) {
                this.updateCheckmark(e.target);
            }
        });

        // Initialize price display
        this.updatePriceDisplay();
    }

    immediateTestFeedback(checkbox) {
    // Try to find either .test-card or .package-card
    const testCard = checkbox.closest('.test-card') || checkbox.closest('.package-card');
    const checkmark = checkbox.nextElementSibling;
    
    if (testCard) {
        if (checkbox.checked) {
            testCard.style.borderColor = '#3b82f6';
            testCard.style.backgroundColor = '#f0f9ff';
            if (checkmark) checkmark.textContent = '☑️';
        } else {
            testCard.style.borderColor = '';
            testCard.style.backgroundColor = '';
            if (checkmark) checkmark.textContent = '☐';
        }
    }
}


    setupNavigationEvents() {
        // Optimized smooth scrolling
        document.addEventListener('click', (e) => {
            if (e.target.matches('a[href^="#"], .nav-link')) {
                e.preventDefault();
                this.handleSmoothScroll(e.target);
            }
        });

        // Optimized resize handling
        const debouncedResize = this.debounce(() => {
            this.handleResize();
        }, 250);
        
        window.addEventListener('resize', debouncedResize);
        this.handleResize(); // Call once on init
    }

    setupModalEvents() {
        if (this.elements.partnerModal) {
            // Close on backdrop click
            this.elements.partnerModal.addEventListener('click', (e) => {
                if (e.target === this.elements.partnerModal) {
                    this.closeModal();
                }
            });

            // Close on ESC key
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape' && this.elements.partnerModal.style.display === 'block') {
                    this.closeModal();
                }
            });
        }
    }

    setupFormValidation() {
        // Real-time validation with debouncing
        const debouncedValidation = this.debounce((field) => {
            this.validateField(field);
        }, 300);

        document.addEventListener('input', (e) => {
            if (e.target.classList.contains('form-control')) {
                this.clearFieldError(e.target);
                debouncedValidation(e.target);
            }
        });

        document.addEventListener('blur', (e) => {
            if (e.target.classList.contains('form-control')) {
                this.validateField(e.target);
            }
        });
    }

    // Utility function for debouncing
    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func.apply(this, args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    // Authentication Methods
    showLoginForm() {
        console.log('🔑 Showing login form');
        this.hideAllForms();
        if (this.elements.loginForm) {
            this.elements.loginForm.classList.remove('hidden');
        }
        this.currentForm = 'login';
    }

    showRegisterForm() {
        console.log('📝 Showing register form');
        this.hideAllForms();
        if (this.elements.registerForm) {
            this.elements.registerForm.classList.remove('hidden');
        }
        this.currentForm = 'register';
    }

    showForgotPassword() {
        console.log('🔄 Showing forgot password form');
        this.hideAllForms();
        if (this.elements.forgotPasswordForm) {
            this.elements.forgotPasswordForm.classList.remove('hidden');
        }
        this.currentForm = 'forgot';
    }

    hideAllForms() {
        const forms = [this.elements.loginForm, this.elements.registerForm, this.elements.forgotPasswordForm];
        forms.forEach(form => {
            if (form) {
                form.classList.add('hidden');
            }
        });
    }

    async handleLogin(event) {
        event.preventDefault();
        console.log('🔐 Login attempt started');

        const email = document.getElementById('loginEmail').value.trim();
        const password = document.getElementById('loginPassword').value.trim();
        const submitBtn = event.target.querySelector('button[type="submit"]');

        // Clear any existing errors
        this.clearFormErrors();

        // Validate inputs
        if (!this.validateLoginForm(email, password)) {
            return;
        }

        // Show loading state
        this.setButtonLoading(submitBtn, true);
        this.showNotification('🔐 Signing you in...', 'info');

        try {
            // Simulate authentication process
            await this.simulateAuth(1000);
            
            // Store login state
            sessionStorage.setItem('MediCareLoggedIn', 'true');
            sessionStorage.setItem('MediCareUserEmail', email);
            sessionStorage.setItem('MediCareLoginTime', new Date().toISOString());
            
            this.isLoggedIn = true;
            
            console.log('✅ Login successful');
            this.showNotification('🎉 Welcome to MediCare! Login successful.', 'success');
            
            // Show main site with smooth transition
            setTimeout(() => {
                this.showMainSite();
            }, 800);
            
        } catch (error) {
            console.error('❌ Login failed:', error);
            this.showNotification('❌ Login failed. Please try again.', 'error');
        } finally {
            this.setButtonLoading(submitBtn, false);
        }
    }

    async handleRegister(event) {
        event.preventDefault();
        console.log('📝 Registration attempt started');

        const formData = {
            name: document.getElementById('registerName').value.trim(),
            email: document.getElementById('registerEmail').value.trim(),
            phone: document.getElementById('registerPhone').value.trim(),
            password: document.getElementById('registerPassword').value.trim(),
            confirmPassword: document.getElementById('confirmPassword').value.trim()
        };
        
        const submitBtn = event.target.querySelector('button[type="submit"]');

        // Clear any existing errors
        this.clearFormErrors();

        // Validate registration form
        if (!this.validateRegistrationForm(formData)) {
            return;
        }

        // Show loading state
        this.setButtonLoading(submitBtn, true);
        this.showNotification('📝 Creating your account...', 'info');

        try {
            // Simulate registration process
            await this.simulateAuth(1500);
            
            console.log('✅ Registration successful');
            this.showNotification('🎉 Account created successfully! You can now login.', 'success');
            
            // Switch to login form
            setTimeout(() => {
                this.showLoginForm();
                // Pre-fill email in login form
                const loginEmail = document.getElementById('loginEmail');
                if (loginEmail) {
                    loginEmail.value = formData.email;
                }
            }, 1200);
            
        } catch (error) {
            console.error('❌ Registration failed:', error);
            this.showNotification('❌ Registration failed. Please try again.', 'error');
        } finally {
            this.setButtonLoading(submitBtn, false);
        }
    }

    async handleForgotPassword(event) {
        event.preventDefault();
        console.log('🔄 Password reset attempt started');

        const email = document.getElementById('forgotEmail').value.trim();
        const submitBtn = event.target.querySelector('button[type="submit"]');

        // Clear any existing errors
        this.clearFormErrors();

        // Validate email
        if (!this.isValidEmail(email)) {
            this.showFieldError('forgotEmail', 'Please enter a valid email address');
            return;
        }

        // Show loading state
        this.setButtonLoading(submitBtn, true);
        this.showNotification('📧 Sending reset instructions...', 'info');

        try {
            // Simulate password reset process
            await this.simulateAuth(1200);
            
            console.log('✅ Password reset email sent');
            this.showNotification('📧 Password reset instructions sent to your email!', 'success');
            
            // Switch to login form
            setTimeout(() => {
                this.showLoginForm();
            }, 1500);
            
        } catch (error) {
            console.error('❌ Password reset failed:', error);
            this.showNotification('❌ Failed to send reset email. Please try again.', 'error');
        } finally {
            this.setButtonLoading(submitBtn, false);
        }
    }

    handleLogout() {
        console.log('🚪 Logout initiated');
        
        // Clear session data
        sessionStorage.removeItem('diagnoHubLoggedIn');
        sessionStorage.removeItem('diagnoHubUserEmail');
        sessionStorage.removeItem('diagnoHubLoginTime');
        
        // Reset application state
        this.selectedTests = [];
        this.totalPrice = 0;
        this.isLoggedIn = false;
        this.updatePriceDisplay();
        
        this.showNotification('👋 You have been logged out successfully', 'info');
        this.showLoginPage();
        
        console.log('✅ Logout completed');
    }

    showLoginPage() {
        if (this.elements.loginPage && this.elements.mainSite) {
            this.elements.loginPage.classList.remove('hidden');
            this.elements.loginPage.style.display = 'flex';
            this.elements.mainSite.classList.add('hidden');
            this.elements.mainSite.classList.remove('show');
            this.elements.mainSite.style.display = 'none';
            document.body.style.overflow = 'auto';
            
            console.log('🔑 Login page displayed');
        }
    }

    showMainSite() {
        if (this.elements.loginPage && this.elements.mainSite) {
            this.elements.loginPage.classList.add('hidden');
            this.elements.loginPage.style.display = 'none';
            this.elements.mainSite.classList.remove('hidden');
            this.elements.mainSite.style.display = 'block';
            
            // Smooth transition
            requestAnimationFrame(() => {
                this.elements.mainSite.classList.add('show');
                this.initializeScrollAnimations();
                console.log('🏠 Main site transition completed');
            });
            
            console.log('🏠 Main site displayed');
        }
    }

    // Optimized Test Selection Methods
    handleTestSelection(checkbox) {
        const testCard = checkbox.closest('.test-card') || checkbox.closest('.package-card');
let testName = 'Unknown Test';
if (testCard) {
    const h4 = testCard.querySelector('h4') || testCard.querySelector('h3');
    if (h4) {
        testName = h4.textContent;
    }
} else {
    // fallback: maybe use a data attribute on the checkbox
    testName = checkbox.getAttribute('data-package-name') || 'Unknown Test';
}

        const testPrice = parseInt(checkbox.getAttribute('data-price'));

        if (checkbox.checked) {
            // Add test to selection
            this.selectedTests.push({
                name: testName,
                price: testPrice,
                element: checkbox
            });
            this.totalPrice += testPrice;

        } else {
            // Remove test from selection
            this.selectedTests = this.selectedTests.filter(test => test.element !== checkbox);
            this.totalPrice -= testPrice;
        }

        // Batch DOM updates for better performance
        requestAnimationFrame(() => {
            this.updatePriceDisplay();
            this.animatePriceChange();
        });
    }

    updateCheckmark(checkbox) {
        const checkmark = checkbox.nextElementSibling;
        if (checkmark && checkmark.classList.contains('checkmark')) {
            checkmark.textContent = checkbox.checked ? '☑️' : '☐';
            
            // Smooth animation
            checkmark.style.transform = 'scale(1.2)';
            requestAnimationFrame(() => {
                setTimeout(() => {
                    checkmark.style.transform = 'scale(1)';
                }, 100);
            });
        }
    }

    updatePriceDisplay() {
        if (!this.elements.selectedTests || !this.elements.totalPrice || !this.elements.proceedBooking) {
            return;
        }

        if (this.selectedTests.length === 0) {
            this.elements.selectedTests.innerHTML = '<p class="no-tests">No tests selected</p>';
            this.elements.proceedBooking.disabled = true;
            this.elements.proceedBooking.textContent = 'Proceed to Booking';
        } else {
            const testsList = this.selectedTests.map(test => 
                `<div class="selected-test-item">
                    <span class="test-name">${test.name}</span>
                    <span class="test-price">₹${test.price}</span>
                </div>`
            ).join('');

            this.elements.selectedTests.innerHTML = testsList;
            this.elements.proceedBooking.disabled = false;
            this.elements.proceedBooking.textContent = `Proceed to Booking (${this.selectedTests.length} tests)`;
        }

        this.elements.totalPrice.textContent = this.totalPrice;
    }

    animatePriceChange() {
        if (this.elements.totalPrice) {
            this.elements.totalPrice.style.transform = 'scale(1.1)';
            this.elements.totalPrice.style.color = '#16a34a';
            
            setTimeout(() => {
                this.elements.totalPrice.style.transform = 'scale(1)';
                this.elements.totalPrice.style.color = '';
            }, 250);
        }
    }

    // Optimized Booking Methods
    async handleBookingSubmission(event) {
        event.preventDefault();
        console.log('📋 Booking submission started');

        const formData = this.collectBookingData();
        const submitBtn = event.target.querySelector('button[type="submit"]');

        // Validate booking form
        if (!this.validateBookingForm(formData)) {
            return;
        }

        // Show loading state
        this.setButtonLoading(submitBtn, true);
        this.showNotification('📋 Processing your booking request...', 'info');

        try {
            // Simulate booking process
            await this.simulateAuth(2000);

            // Generate booking ID
            const bookingId = 'DH' + Date.now().toString().slice(-6);

            console.log('✅ Booking confirmed');
            this.showNotification('🎉 Booking confirmed! You will receive a confirmation call within 24 hours.', 'success');

            // Show booking summary
            this.showBookingSummary({ ...formData, bookingId });

            // Reset form and selections
            event.target.reset();
            this.resetTestSelections();

        } catch (error) {
            console.error('❌ Booking failed:', error);
            this.showNotification('❌ Booking failed. Please try again.', 'error');
        } finally {
            this.setButtonLoading(submitBtn, false);
        }
    }

    collectBookingData() {
        return {
            patientName: document.getElementById('patientName')?.value.trim(),
            patientPhone: document.getElementById('patientPhone')?.value.trim(),
            patientEmail: document.getElementById('patientEmail')?.value.trim(),
            patientAddress: document.getElementById('patientAddress')?.value.trim(),
            collectionDate: document.getElementById('collectionDate')?.value,
            collectionTime: document.getElementById('collectionTime')?.value,
            collectionType: document.querySelector('input[name="collectionType"]:checked')?.value,
            paymentMethod: document.querySelector('input[name="paymentMethod"]:checked')?.value,
            selectedTests: this.selectedTests,
            totalAmount: this.totalPrice
        };
    }

    validateBookingForm(formData) {
        const requiredFields = ['patientName', 'patientPhone', 'patientEmail', 'patientAddress', 'collectionDate', 'collectionTime', 'collectionType', 'paymentMethod'];
        const missingFields = requiredFields.filter(field => !formData[field]);

        if (missingFields.length > 0) {
            this.showNotification('❌ Please fill in all required fields', 'error');
            return false;
        }

        // Validate phone number
        if (!/^\d{10}$/.test(formData.patientPhone.replace(/\D/g, ''))) {
            this.showNotification('❌ Please enter a valid 10-digit phone number', 'error');
            return false;
        }

        // Validate email
        if (!this.isValidEmail(formData.patientEmail)) {
            this.showNotification('❌ Please enter a valid email address', 'error');
            return false;
        }

        // Check if tests are selected
        if (this.selectedTests.length === 0) {
            this.showNotification('❌ Please select at least one test', 'error');
            return false;
        }

        return true;
    }

    showBookingSummary(bookingData) {
        const paymentMethodText = this.getPaymentMethodText(bookingData.paymentMethod);
        const collectionTypeText = bookingData.collectionType === 'home' ? '🏠 Home Collection' : '🏥 Visit Center';
        
        const summary = `
            <div style="background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%); border: 2px solid #3b82f6; border-radius: 12px; padding: 24px; margin-top: 24px; box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);">
                <h4 style="color: #3b82f6; margin-bottom: 16px; font-size: 1.25rem; font-weight: 600;">📋 Booking Confirmation</h4>
                <div style="margin-bottom: 12px;"><strong>Booking ID:</strong> <span style="color: #3b82f6; font-weight: 600;">${bookingData.bookingId}</span></div>
                <div style="margin-bottom: 12px;"><strong>👤 Patient:</strong> ${bookingData.patientName}</div>
                <div style="margin-bottom: 12px;"><strong>📞 Phone:</strong> ${bookingData.patientPhone}</div>
                <div style="margin-bottom: 12px;"><strong>📧 Email:</strong> ${bookingData.patientEmail}</div>
                <div style="margin-bottom: 12px;"><strong>📍 Collection:</strong> ${collectionTypeText}</div>
                <div style="margin-bottom: 12px;"><strong>📅 Date & Time:</strong> ${new Date(bookingData.collectionDate).toLocaleDateString()} - ${bookingData.collectionTime}</div>
                <div style="margin-bottom: 12px;"><strong>💳 Payment:</strong> ${paymentMethodText}</div>
                <div style="margin-bottom: 16px;"><strong>🔬 Tests:</strong> ${bookingData.selectedTests.map(test => test.name).join(', ')}</div>
                <div style="color: #3b82f6; font-weight: bold; font-size: 1.125rem; padding: 12px; background: rgba(59, 130, 246, 0.1); border-radius: 8px; text-align: center;">
                    💰 Total Amount: ₹${bookingData.totalAmount}
                </div>
                <div style="margin-top: 16px; padding: 12px; background: #f0f9ff; border-radius: 8px; font-size: 0.875rem; color: #0891b2;">
                    <strong>📋 What's Next?</strong><br>
                    • ☎️ You'll receive a confirmation call within 24 hours<br>
                    • 🚗 Our team will coordinate the sample collection<br>
                    • 📊 Reports will be available digitally within 24-48 hours<br>
                    • 📱 Track your booking status on our platform
                </div>
            </div>
        `;

        // Find the booking form container and append summary
        const formContainer = document.querySelector('#booking .docs-card');
        if (formContainer) {
            formContainer.innerHTML += summary;

            // Smooth scroll to summary
            setTimeout(() => {
                formContainer.scrollIntoView({ behavior: 'smooth', block: 'end' });
            }, 300);
        }
    }

    getPaymentMethodText(method) {
        const methods = {
            'card': '💳 Credit/Debit Card',
            'upi': '📱 UPI Payment',
            'cash': '💵 Cash on Arrival',
            'emi': '💰 EMI Options'
        };
        return methods[method] || method;
    }

    resetTestSelections() {
        // Batch DOM updates for better performance
        const checkboxes = document.querySelectorAll('input[type="checkbox"][data-price]');
        
        requestAnimationFrame(() => {
            checkboxes.forEach(checkbox => {
                checkbox.checked = false;
                const testCard = checkbox.closest('.test-card');
                if (testCard) {
                    testCard.style.borderColor = '';
                    testCard.style.backgroundColor = '';
                }

                // Reset checkmark display
                const checkmark = checkbox.nextElementSibling;
                if (checkmark && checkmark.classList.contains('checkmark')) {
                    checkmark.textContent = '☐';
                }
            });

            // Reset state
            this.selectedTests = [];
            this.totalPrice = 0;
            this.updatePriceDisplay();
        });
    }

    // Optimized Partner Modal Methods
    openPartnerModal(partnerId) {
        const partner = this.partnersData[partnerId];
        if (!partner || !this.elements.partnerModal || !this.elements.modalBody) return;

        this.elements.modalBody.innerHTML = this.generatePartnerModalContent(partner, partnerId);

        // Show modal with smooth animation
        this.elements.partnerModal.style.display = 'block';
        requestAnimationFrame(() => {
            this.elements.partnerModal.classList.add('show');
        });
        
        document.body.style.overflow = 'hidden';

        console.log(`🏥 Opened modal for ${partner.name}`);
    }

    generatePartnerModalContent(partner, partnerId) {
        return `
            <h2 style="color: #000000; margin-bottom: 24px; font-size: 1.5rem; font-weight: 600;">${partner.name}</h2>
            <div class="partner-details">
                <div class="detail-section">
                    <h3>📞 Contact Information</h3>
                    <p><strong>📍 Address:</strong> ${partner.location}</p>
                    <p><strong>📞 Phone:</strong> <a href="tel:${partner.phone}" style="color: #3b82f6;">${partner.phone}</a></p>
                    <p><strong>📧 Email:</strong> <a href="mailto:${partner.email}" style="color: #3b82f6;">${partner.email}</a></p>
                    <p><strong>📅 Established:</strong> ${partner.established}</p>
                </div>
                
                <div class="detail-section">
                    <h3>🏥 Services</h3>
                    <ul>
                        ${partner.services.map(service => `<li>${service}</li>`).join('')}
                    </ul>
                </div>
                
                <div class="detail-section">
                    <h3>🏆 Certifications</h3>
                    <div class="certifications">
                        ${partner.certifications.map(cert => `<span class="certification-badge">${cert}</span>`).join('')}
                    </div>
                </div>
                
                <div class="detail-section">
                    <h3>ℹ️ About</h3>
                    <p style="color: #4a5568; line-height: 1.6;">${partner.description}</p>
                </div>
                
                <div class="modal-actions">
                    <button class="btn btn--primary" onclick="diagnoHub.bookWithPartner('${partnerId}')">
                        📋 Book Test Here
                    </button>
                    <button class="btn btn--outline" onclick="diagnoHub.getDirections('${partner.location}')">
                        🗺️ Get Directions
                    </button>
                </div>
            </div>
        `;
    }

    closeModal() {
        if (this.elements.partnerModal) {
            this.elements.partnerModal.classList.remove('show');
            setTimeout(() => {
                this.elements.partnerModal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }, 300);
        }
    }

    bookWithPartner(partnerId) {
        const partner = this.partnersData[partnerId];
        this.showNotification(`🏥 Redirecting to book test with ${partner.name}...`, 'info');
        this.closeModal();

        setTimeout(() => {
            this.scrollToSection('booking');
        }, 800);
    }

    getDirections(location) {
        const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location)}`;
        window.open(mapsUrl, '_blank');
        this.showNotification('🗺️ Opening Google Maps for directions...', 'info');
    }

    // Optimized Scroll and Navigation Methods
    handleSmoothScroll(element) {
        let href = element.getAttribute('href');
        
        if (!href || href === '#') {
            const text = element.textContent.toLowerCase().trim();
            const sectionMap = {
                'home': '#home',
                'services': '#tests',
                'health packages': '#packages',
                'partners': '#partners',
                'about': '#about',
                'contact': '#contact'
            };
            href = sectionMap[text];
        }

        if (href && href !== '#') {
            this.scrollToSection(href.substring(1));
        }
    }

    scrollToSection(sectionId) {
        const section = document.getElementById(sectionId);
        if (section) {
            // Use requestAnimationFrame for smoother scrolling
            const targetPosition = section.offsetTop - 80; // Account for fixed navbar
            const startPosition = window.pageYOffset;
            const distance = targetPosition - startPosition;
            const duration = 800;
            let start = null;

            const step = (timestamp) => {
                if (!start) start = timestamp;
                const progress = timestamp - start;
                const ease = this.easeInOutCubic(progress / duration);
                
                window.scrollTo(0, startPosition + distance * ease);
                
                if (progress < duration) {
                    requestAnimationFrame(step);
                }
            };

            requestAnimationFrame(step);
        }
    }

    easeInOutCubic(t) {
        return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
    }

    initializeScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        // Observe elements that should animate
        requestAnimationFrame(() => {
            document.querySelectorAll('.step-card, .test-card, .benefit-card, .partner-card, .package-card').forEach(el => {
                el.style.opacity = '0';
                el.style.transform = 'translateY(20px)';
                el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
                observer.observe(el);
            });
        });
    }

    handleScroll() {
        // Optimized scroll handling
        const scrollY = window.pageYOffset;
        
        // Add navbar background on scroll
        const navbar = document.querySelector('.navbar');
        if (navbar) {
            if (scrollY > 50) {
                navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
                navbar.style.backdropFilter = 'blur(10px)';
            } else {
                navbar.style.backgroundColor = 'rgba(255, 255, 255, 1)';
                navbar.style.backdropFilter = 'none';
            }
        }
    }

    handleResize() {
        if (window.innerWidth <= 768) {
            const contactInfo = document.querySelector('.contact-info');
            if (contactInfo) {
                contactInfo.style.display = 'none';
            }
        } else {
            const contactInfo = document.querySelector('.contact-info');
            if (contactInfo) {
                contactInfo.style.display = 'block';
            }
        }
    }

    // Optimized Validation Methods
    validateLoginForm(email, password) {
        let isValid = true;

        if (!email) {
            this.showFieldError('loginEmail', 'Email is required');
            isValid = false;
        } else if (!this.isValidEmail(email)) {
            this.showFieldError('loginEmail', 'Please enter a valid email address');
            isValid = false;
        }

        if (!password) {
            this.showFieldError('loginPassword', 'Password is required');
            isValid = false;
        } else if (password.length < 6) {
            this.showFieldError('loginPassword', 'Password must be at least 6 characters');
            isValid = false;
        }

        return isValid;
    }

    validateRegistrationForm(data) {
        let isValid = true;

        if (!data.name) {
            this.showFieldError('registerName', 'Full name is required');
            isValid = false;
        } else if (data.name.length < 2) {
            this.showFieldError('registerName', 'Name must be at least 2 characters');
            isValid = false;
        }

        if (!data.email) {
            this.showFieldError('registerEmail', 'Email is required');
            isValid = false;
        } else if (!this.isValidEmail(data.email)) {
            this.showFieldError('registerEmail', 'Please enter a valid email address');
            isValid = false;
        }

        if (!data.phone) {
            this.showFieldError('registerPhone', 'Phone number is required');
            isValid = false;
        } else if (!/^\d{10}$/.test(data.phone.replace(/\D/g, ''))) {
            this.showFieldError('registerPhone', 'Please enter a valid 10-digit phone number');
            isValid = false;
        }

        if (!data.password) {
            this.showFieldError('registerPassword', 'Password is required');
            isValid = false;
        } else if (data.password.length < 6) {
            this.showFieldError('registerPassword', 'Password must be at least 6 characters');
            isValid = false;
        }

        if (!data.confirmPassword) {
            this.showFieldError('confirmPassword', 'Please confirm your password');
            isValid = false;
        } else if (data.password !== data.confirmPassword) {
            this.showFieldError('confirmPassword', 'Passwords do not match');
            isValid = false;
        }

        return isValid;
    }

    validateField(field) {
        const value = field.value.trim();
        const fieldName = field.id;

        switch (fieldName) {
            case 'loginEmail':
            case 'registerEmail':
            case 'forgotEmail':
                if (!value) {
                    this.showFieldError(fieldName, 'Email is required');
                } else if (!this.isValidEmail(value)) {
                    this.showFieldError(fieldName, 'Please enter a valid email address');
                } else {
                    this.clearFieldError(field);
                }
                break;
            case 'registerPhone':
                if (!value) {
                    this.showFieldError(fieldName, 'Phone number is required');
                } else if (!/^\d{10}$/.test(value.replace(/\D/g, ''))) {
                    this.showFieldError(fieldName, 'Please enter a valid 10-digit phone number');
                } else {
                    this.clearFieldError(field);
                }
                break;
            case 'loginPassword':
            case 'registerPassword':
                if (!value) {
                    this.showFieldError(fieldName, 'Password is required');
                } else if (value.length < 6) {
                    this.showFieldError(fieldName, 'Password must be at least 6 characters');
                } else {
                    this.clearFieldError(field);
                }
                break;
            case 'confirmPassword':
                const password = document.getElementById('registerPassword')?.value;
                if (!value) {
                    this.showFieldError(fieldName, 'Please confirm your password');
                } else if (value !== password) {
                    this.showFieldError(fieldName, 'Passwords do not match');
                } else {
                    this.clearFieldError(field);
                }
                break;
            default:
                if (!value) {
                    this.showFieldError(fieldName, 'This field is required');
                } else {
                    this.clearFieldError(field);
                }
        }
    }

    isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    showFieldError(fieldId, message) {
        const field = document.getElementById(fieldId);
        if (!field) return;

        // Remove existing error
        this.clearFieldError(field);

        // Add error styling
        field.classList.add('error');
        field.style.borderColor = '#dc2626';

        // Create error message
        const errorDiv = document.createElement('div');
        errorDiv.className = 'field-error';
        errorDiv.textContent = message;
        errorDiv.style.cssText = `
            color: #dc2626;
            font-size: 12px;
            margin-top: 4px;
            animation: slideDown 0.3s ease-out;
        `;

        field.parentNode.appendChild(errorDiv);

        // Add error animation styles if not present
        if (!document.querySelector('#error-animations')) {
            const style = document.createElement('style');
            style.id = 'error-animations';
            style.textContent = `
                @keyframes slideDown {
                    from { opacity: 0; transform: translateY(-10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .form-control.error {
                    animation: shake 0.5s ease-in-out;
                }
                @keyframes shake {
                    0%, 100% { transform: translateX(0); }
                    25% { transform: translateX(-5px); }
                    75% { transform: translateX(5px); }
                }
            `;
            document.head.appendChild(style);
        }
    }

    clearFieldError(field) {
        field.classList.remove('error');
        field.style.borderColor = '';
        
        const errorDiv = field.parentNode.querySelector('.field-error');
        if (errorDiv) {
            errorDiv.remove();
        }
    }

    clearFormErrors() {
        const errorFields = document.querySelectorAll('.form-control.error');
        errorFields.forEach(field => this.clearFieldError(field));
        
        const errorMessages = document.querySelectorAll('.field-error');
        errorMessages.forEach(error => error.remove());
    }

    // UI Enhancement Methods
    setButtonLoading(button, isLoading) {
        const textSpan = button.querySelector('.btn-text');
        const loaderSpan = button.querySelector('.btn-loader');

        if (isLoading) {
            button.classList.add('loading');
            button.disabled = true;
            if (textSpan) textSpan.style.display = 'none';
            if (loaderSpan) loaderSpan.style.display = 'inline-block';
        } else {
            button.classList.remove('loading');
            button.disabled = false;
            if (textSpan) textSpan.style.display = 'inline-block';
            if (loaderSpan) loaderSpan.style.display = 'none';
        }
    }

    // Optimized Notification System
    showNotification(message, type = 'info') {
        console.log(`📢 Notification: ${message} (${type})`);
        

        // Remove existing notification efficiently
        if (this.currentNotification) {
            this.currentNotification.remove();
            this.currentNotification = null;
        }

        const notification = document.createElement('div');
        notification.className = `notification notification--${type}`;

        const icons = {
            success: '✅',
            error: '❌',
            warning: '⚠️',
            info: 'ℹ️'
        };

        notification.innerHTML = `
            <div class="notification-content">
                <span class="notification-message">${icons[type]} ${message}</span>
                <button class="notification-close" onclick="this.parentElement.parentElement.remove()" aria-label="Close notification">&times;</button>
            </div>
        `;

        document.body.appendChild(notification);
        this.currentNotification = notification;

        // Auto remove after 4 seconds (reduced for better UX)
        setTimeout(() => {
            if (notification.parentElement) {
                notification.style.animation = 'slideInRight 0.3s ease-out reverse';
                setTimeout(() => {
                    notification.remove();
                    if (this.currentNotification === notification) {
                        this.currentNotification = null;
                    }
                }, 300);
            }
        }, 4000);
    }

    setupDateInputs() {
        const today = new Date().toISOString().split('T')[0];
        const dateInputs = document.querySelectorAll('input[type="date"]');
        dateInputs.forEach(input => {
            input.setAttribute('min', today);
        });
    }

    setupAccessibility() {
        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                if (e.target.classList.contains('partner-card')) {
                    e.preventDefault();
                    e.target.click();
                }
            }
        });

        // Add tabindex to interactive elements
        requestAnimationFrame(() => {
            document.querySelectorAll('.partner-card').forEach(card => {
                card.setAttribute('tabindex', '0');
                card.setAttribute('role', 'button');
            });
        });
    }

    // Utility Methods
    async simulateAuth(delay = 1000) {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve();
            }, delay);
        });
    }

    // Error Handling
    handleError(error, context = 'Application') {
        console.error(`❌ ${context} Error:`, error);
        this.showNotification('❌ An error occurred. Please refresh the page if issues persist.', 'error');
    }
}



// Global Functions for HTML onclick events
function showLoginForm() {
    if (window.diagnoHub) {
        window.diagnoHub.showLoginForm();
    }
}

function showRegisterForm() {
    if (window.diagnoHub) {
        window.diagnoHub.showRegisterForm();
    }
}

function showForgotPassword() {
    if (window.diagnoHub) {
        window.diagnoHub.showForgotPassword();
    }
}

function openPartnerModal(partnerId) {
    if (window.diagnoHub) {
        window.diagnoHub.openPartnerModal(partnerId);
    }
}

function closeModal() {
    if (window.diagnoHub) {
        window.diagnoHub.closeModal();
    }
}

function scrollToSection(sectionId) {
    if (window.diagnoHub) {
        window.diagnoHub.scrollToSection(sectionId);
    }
}

// Initialize Application
let diagnoHub;

// Error handling
window.addEventListener('error', function(event) {
    console.error('🚨 Global Error:', event.error);
    if (window.diagnoHub) {
        window.diagnoHub.handleError(event.error, 'Global');
    }
});

// Performance monitoring
window.addEventListener('load', function() {
    console.log('📊 Page Load Time:', performance.now(), 'ms');
});

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        diagnoHub = new DiagnoHub();
        window.diagnoHub = diagnoHub; // Make globally accessible
    });
} else {
    diagnoHub = new DiagnoHub();
    window.diagnoHub = diagnoHub; // Make globally accessible
}



// Allow removal/change before booking
window.removePrescription = function() {
  uploadedPrescription = null;
  document.getElementById('bookingPrescriptionSummary').innerHTML = `<span style="color:#888;">No prescription uploaded.</span>`;
};
