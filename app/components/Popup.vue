
<template>
    
       <!-- Modal -->
    <div class="modal fade" id="masterclassModal" tabindex="-1" aria-labelledby="masterclassModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-md">
            <div class="modal-content">
                <div class="modal-header">
                    <div>
                        <h4 class="modal-title mb-2 text-white" id="masterclassModalLabel">
                            <i class="fas fa-graduation-cap me-2"></i>Join Our Free Masterclass
                        </h4>
                        <p class="mb-0  text-white">Add in your Name, Phone & Email to get access to the Training</p>
                    </div>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="mb-4 text-center">
                        <span class="feature-badge"><i class="fas fa-check me-1"></i> Live Session</span>
                        <span class="feature-badge"><i class="fas fa-check me-1"></i> Certificate Included</span>
                        <span class="feature-badge"><i class="fas fa-check me-1"></i> Q&A Session</span>
                    </div>

                    <form @submit.prevent="submitForm">
                        <div class="row g-3">
                            <div class="col-md-6">
                                <label for="fullName" class="form-label">
                                    First Name
                                </label>
                                <div class="input-group">
                                    <span class="input-group-text"><i class="fas fa-user"></i></span>
                                    <input type="text" class="form-control" id="firstName" placeholder="First Name" required>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <label for="fullName" class="form-label">
                                    Last Name
                                </label>
                                <div class="input-group">
                                    <span class="input-group-text"><i class="fas fa-user"></i></span>
                                    <input type="text" class="form-control" id="lastName" placeholder="Last Name" required>
                                </div>
                            </div>
                            
                            <div class="col-md-12">
                                <label for="email" class="form-label">
                                    Email Address
                                </label>
                                <div class="input-group">
                                    <span class="input-group-text"><i class="fas fa-envelope"></i></span>
                                    <input type="email" class="form-control" id="email" placeholder="john@example.com" required>
                                </div>
                            </div>

                            <div class="col-md-12">
                                <label for="phone" class="form-label">
                                    Phone Number
                                </label>
                                <div class="input-group">
                                    <span class="input-group-text"><i class="fas fa-phone"></i></span>
                                    <input type="tel" class="form-control" id="phone" placeholder="+1 (555) 000-0000" required>
                                </div>
                            </div>

                            

                            
                        </div>

                        <div class="d-grid gap-2 mt-4">
                            <button type="submit" class="btn btn-register btn-lg">
                                <i class="fas fa-rocket me-2"></i>Join the Free Masterclass
                            </button>
                        </div>

                        <p class="text-center text-muted mt-3 mb-0">
                            <small><i class="fas fa-lock me-1"></i>Your information is secure and will never be shared</small>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    </div>

</template>
<script setup>
import Swal from "sweetalert2";

const submitForm = async (e) => {
  e.preventDefault();

  const form = e.target;

  const data = {
    firstName: form.querySelector("#firstName").value,
    lastName: form.querySelector("#lastName").value,
    email: form.querySelector("#email").value,
    phone: form.querySelector("#phone").value,
    slug: "commercial-lending-mastery"
  };

  try {
    const res = await fetch(
      "https://api-lendingcart.vibrantick.org/public/landing-leads/commercial-lending-mastery",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      }
    );

    if (!res.ok) {
      const text = await res.text();
      throw new Error(`API failed: ${res.status} - ${text}`);
    }

    Swal.fire({
      icon: "success",
      title: "Success",
      text: "Registered successfully"
    });

    form.reset();

  } catch (err) {
    console.error(err);
    Swal.fire({
      icon: "error",
      title: "Error",
      text: "Something went wrong. Please try again."
    });
  }
};
</script>


